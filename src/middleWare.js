// setting up middleWares for requests
exports.requiredRegiterationFields = (req,res,next)=>{
     // extracting and checking for the credentials
     const {name,email,password}=req.body;
     if(!name || !email || !password){
       res.status(400).json({
        errorMessage:"all the credentials are required please provide all the fields"
       })
       
     }
     else{
        next()
     }
}

exports.requiredLoginFields = (req,res,next)=>{
    // extracting and checking for the credentials
    const {email,password}=req.body;
    if( !email || !password){
      res.status(400).json({
       errorMessage:"all the credentials are required please provide all the fields"
      })
      
    }
    else{
       next()
    }
}