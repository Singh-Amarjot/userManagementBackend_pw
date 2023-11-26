// importing express 
const express = require("express")
//importing cors
const cors = require("cors")
// importing routes from router.js
const routes = require("../routes/router.js")

// creating an app server using express

const app = express()

// setting up routes and other middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",routes)



// exporting app
module.exports = app;