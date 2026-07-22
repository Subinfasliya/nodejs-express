const express = require('express')
const { createUser } = require('../controllers/userControllers')
const upload = require('../middlewares/upload')
const router = express.Router()


router.post("/",upload.single("image"), createUser)

module.exports = router