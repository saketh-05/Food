const express = require('express')
// const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
// mongoose.connect('mongodb://localhost:27017/foodieDetails')
// .then(()=>{
//   console.log("MongoDB is connected!")
// })
// .catch((err)=>{
//   console.log("Unable to connect",err)
// })
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://dsakethsurya:saketh1234@merncluster.c3k9g.mongodb.net/?retryWrites=true&w=majority&appName=MernCluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const User = require('../models/userSchema')
const router = express.Router()

router.post('/signup', async (req, res) => {
    const { username, email, password  } = req.body;
    try {
      // Check if user already exists
      let user = await User.findOne({username});
      let emailVerified = await User.findOne({email})
      if (user || emailVerified) {
        return res.status(400).json({ message: 'Foodie already exists' });
      }
      // Hash the password before saving
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      // Create new user
      user = new User({
        username,
        email,
        password: hashedPassword,
      });
  
      // Save user to the database
      await user.save();
  
      res.status(201).json({ message: 'New Foodie Registered successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router