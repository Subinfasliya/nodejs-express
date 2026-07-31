const express = require("express");
const {
  userLoggin,
  userRegister,
  userProfile,
} = require("../controllers/userController");
const protect = require("../middlewares/auth");

const router = express.Router();

router.post("/login", userLoggin);
router.post("/register", userRegister);
router.get("/profile",protect, userProfile);

module.exports = { userRoutes: router };
