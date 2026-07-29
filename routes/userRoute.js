const express = require("express");
const {
  userLoggin,
  userRegister,
  userProfile,
} = require("../controllers/userController");

const router = express.Router();

router.post("/login", userLoggin);
router.post("/register", userRegister);
router.get("/profile", userProfile);

module.exports = { userRoutes: router };
