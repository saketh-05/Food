const express = require('express');
const bcrypt = require('bcrypt');
const { SignJWT, jwtVerify } = require('jose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const router = express.Router();

const uri =
  "mongodb+srv://dsakethsurya:saketh1234@merncluster.c3k9g.mongodb.net/foodieDB?retryWrites=true&w=majority";

// Initialize MongoDB Client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit the process if the connection fails
  }
}
connectDB();
const db = client.db("Food");
const usersCollection = db.collection("users");

const secretKey = new TextEncoder().encode('user_token'); // Replace with your actual secret key

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    // Check if the user or email already exists
    const existingUser = await usersCollection.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    // Check if the password is correct
    const passwordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!passwordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT using jose
    const token = await new SignJWT({ userID: existingUser._id })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('3h')
      .sign(secretKey);

    res.status(200).json({ message: "Login successful", token: token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// // Authentication Middleware
// const authenticate = async (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     // Verify JWT using jose
//     const { payload } = await jwtVerify(token, secretKey);
//     req.userID = payload.userID;
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// };

// // Protected Route
// router.get('/api/protected', authenticate, (req, res) => {
//   res.status(200).json({ message: 'Protected' });
// });

module.exports = router;
