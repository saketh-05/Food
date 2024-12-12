const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion } = require('mongodb');
const router = express.Router();

const uri =
  "mongodb+srv://dsakethsurya:saketh1234@merncluster.c3k9g.mongodb.net/?retryWrites=true&w=majority&appName=MernCluster";

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
    console.log(existingUser._id," and ",existingUser.username," and ",existingUser.email);
    const payload = {
      userID: existingUser._id,
      name: existingUser.username,
      email: existingUser.email,
    };
    const token = jwt.sign(payload, 'my_secret', {expiresIn:'3h'});
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/googlelogin', async (req, res) => {
  const { email, name } = req.body;
  try {
      console.log('creating google user token...');
      console.log('Payload: ',email,name);
      const identifyUser = await usersCollection.findOne({email});
      if(!identifyUser){
        console.log("triggering google user identification");
        const newUser = {
          username : name,
          email,
        };
        // Insert the new user into the database
        await usersCollection.insertOne(newUser);
        console.log("added google user");
      }
      // Generate JWT using jsonwebtoken
      const payload = {
        name,
        email
      };
      const token = jwt.sign(payload, 'my_secret', {expiresIn:'3h'});
      res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
