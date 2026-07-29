const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const signToken = require("../utils/jwt");

const isMongoDBReady = () => mongoose.connection.readyState === 1;

const userLoggin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!isMongoDBReady()) {
      return res.status(503).json({
        success: false,
        message: "Database not available right now",
      });
    }

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password require",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = signToken({
      id: user._id,
      email: user.email,
    });

    res.status(200).json({
      success: true,
      message: "Login successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

const userRegister = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const alreadyExist = await User.findOne({ email });

    if (alreadyExist) {
      return res.status(409).json({
        success: false,
        message: "Email already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({
      success: true,
      message: "Successfully created new user",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};


const userProfile = async(req,res,next) => {
  try{
     
    res.status(200).json({
      success:true,
      message:"Profile"
    })
  } catch(error){
    next(error)
  }
}

module.exports = {
  userLoggin,
  userRegister,
  userProfile
};
