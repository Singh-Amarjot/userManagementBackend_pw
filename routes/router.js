//importing express 
const express = require("express")
// importing controllers from controller.js
const {register, login}=require("../controllers/controllers.js")
// importing middlewares from middleWare.js
const{ requiredRegiterationFields, requiredLoginFields} = require("../src/middleWare.js")

// setting up a router 
const router = express.Router()

// handling routes

router.post("/register",requiredRegiterationFields,register)
router.post("/login",requiredLoginFields,login)



// exporting router object 
module.exports=router