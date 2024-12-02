const express = require('express')
const bcrypt = require('bcrypt');
const { MongoClient, ServerApiVersion } = require('mongodb');
const User = require('../models/userSchema');
const router = express.Router()

module.exports = router