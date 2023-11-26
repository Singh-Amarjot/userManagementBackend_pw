// importing mongoose 
const mongoose = require("mongoose")

// setting up schema for storing user information 
userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required:[true,"userName is required"],
        maxLength:[20,"userName should be less than 20 characters"],
        unique:[true,"userName should be unique"]
    },
    userEmail :{
        type: String,
        required:[true,"email is required"],
        maxLength:[20,"email should be less than 20 characters"],
        unique:[true,"email should be unique"]
    },
    password :{
        type: String,
        required:[true,"password is required"],
        maxLength:[20,"password should be less than 20 characters"]
    },
    created_at : {
        type: Date,
        default : Date.now
    },
    updated_at : {
        type: Date,
        default: Date.now
    }
})

// creating a model from userSchema 
const userModel = mongoose.model("User",userSchema)
 
// exporting userModel
module.exports = userModel;
