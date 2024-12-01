const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    displayname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
        maxlength:60
    },
    pronoun:{
        type:String,
        maxlength:3
    }
}) 

module.exports = mongoose.model('User',userSchema)