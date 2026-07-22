const User = require("../models/userModels");

const createUser = async (req, res) => {
  console.log(req.file);

  try {
    const user = await User.create({
      name: req.body.name,
      image: req.file.filename,
    });
    res.status(201).json({
      message: "Successfully created new user ",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser };
