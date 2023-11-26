// importing app from app.js
const app = require("./app.js")
// importing and configuring dotenv
const dotenv = require("dotenv")
dotenv.config()
// importing  and initializing dbConnection from dbConnect.js
const dbConnect = require("../database/dbConnect.js")
dbConnect()


// setting up port 
const port = process.env.PORT || 5500

// starting the server 
app.listen(port,()=>{
    console.log("the server is running at port number ",port )
})