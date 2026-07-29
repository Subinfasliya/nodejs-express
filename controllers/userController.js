const User = require("../models/userModel");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      message: "Successfully fetched all users",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers };
