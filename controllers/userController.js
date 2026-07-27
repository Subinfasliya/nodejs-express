const mongoose = require("mongoose");
const User = require("../models/userModel");

const isMongoDBReady = () => mongoose.connection.readyState === 1;

const userLoggin = async (req, res,next) => {
  try {
    if(!isMongoDBReady()){
        return res.status(503).json({
            success:false,
            message:"Database not available right now"
        })
    }
    const user = await User.find();

    res.status(200).json({
      success: true,
      message: "Successfully fetched loggin user",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const userRegister = async (req, res, next) => {
  console.log(req.body);

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
    const user = await User.create({ name, email, password });

    res.status(201).json({
      success: true,
      message: "Successfully created new user",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLoggin,
  userRegister,
};
