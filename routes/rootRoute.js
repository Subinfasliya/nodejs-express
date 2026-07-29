const express = require('express')
const router = express.Router()
const getApiInfo = require('../controllers/rootController')

router.get("/", getApiInfo)

module.exports = {rootRoute:router}