const User = require("../models/userModel");
const { verifyToken } = require("../utils/jwt");

const protect = async(req, res, next) => {
  
  try {

    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1]

        
    }

    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    const decode = verifyToken(token)

  req.user = await User.findById(decode.id).select("-password")
  
  if(!req.user){
    return res.status(404).json({
        success:false,
        message:"User not found"
    })
  };
  
  next()

  } catch (error) {
    return next(error)
  }
};

module.exports = protect