const users = require("../models/userModel");

// Get All users
const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

// Get user by id
const getUserById = (req, res) => {
  const userId = Number(req.params.id);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json(user);
};

// POST new user
const createUser = (req,res) => {
    const {name,age} = req.body

    if(!name || age === undefined){
        return res.status(400).json({
            message:"Name and Email are required"
        })
    }

    if(typeof name !== "string"){
        return res.status(400).json({
            message:"Invalid Name"
        })
    }

    if(typeof age !== "number" || age < 0){
        return res.status(400).json({
            message:"Invalid Age"
        })
    }

    const newUser = {
        id:users.length + 1,
        name,
        age 
    }

    users.push(newUser)

    res.status(201).json({
        message:"Successfully created new user"
    })

} 

module.exports = {
  getAllUsers,
  getUserById,
  createUser
};
