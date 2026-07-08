const express = require("express");
const { getAllUsers, createUser, getUserById } = require("../controllers/userController");

const router = express.Router();

// Get All users
router.get("/", getAllUsers);

// Get user by id
router.get("/:id", getUserById)

router.post("/", createUser)

module.exports = router;
