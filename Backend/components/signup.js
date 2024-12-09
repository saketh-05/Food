const express = require("express");
const bcrypt = require("bcrypt");
const { MongoClient, ServerApiVersion } = require("mongodb");
const router = express.Router();

// MongoDB Atlas URI
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

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");
    console.log("check check");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit the process if the connection fails
  }
}

connectDB();

// Set the database for operations
const db = client.db("Food");
const usersCollection = db.collection("users");

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password); // Log the user data
  try {
    // Check if the user or email already exists
    const existingUser = await usersCollection.findOne({ username });
    const existingEmail = await usersCollection.findOne({ email });

    if (existingUser || existingEmail) {
      return res.status(400).json({ message: "Foodie already exists" });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create a new user object
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };
    // Insert the new user into the database
    await usersCollection.insertOne(newUser);

    res.status(200).json({ message: "New Foodie Registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
