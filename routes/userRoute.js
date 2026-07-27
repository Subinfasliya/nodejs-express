const express = require('express')
const { userLoggin, userRegister } = require('../controllers/userController')

const router = express.Router()

router.get('/login', userLoggin)
router.post('/register', userRegister)

module.exports = {userRoutes:router}