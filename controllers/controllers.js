// importing user model from models.js
const User = require("../database/models/models.js")
// creating controllers for all the routes 

exports.register = async (req,res)=>{
    // extracting credentials from user

    const{name,email,password} = req.body;

    // creating a new user with the credentials
    try{
    const newUser =  await User.create({userName:name,userEmail:email,password})

    // sending success message 
    res.status(200).json({
        success:true,
        message: " registration with a new user is successfull",
        newUser
    })
}catch(error){
    res.status(400).json({
        success:false,
        message:"registration was not successfull",
        error: error.message
    })
}


}

exports.login = async (req,res)=>{
    // extracting credentials from the body 
    const {email,password} = req.body;

    // checking if the user email and password are valid or not 
    try{

       let emailExists =   await User.findOne({userEmail:email})
       if(!emailExists){
        throw new Error("no account is associated with this email address")
       }
       let user = await User.findOne({userEmail:email,password})
       if(!user){
        throw new Error("please check the entered password ")
       }
       // sending success message 
       res.status(200).json({
        success:true,
        message: " login was successfull",
        welcome: user.userName
    })


    }catch(error){
        res.status(400).json({
         success:false,
        message:"login was not successfull",
        error: error.message
        })
    }
}