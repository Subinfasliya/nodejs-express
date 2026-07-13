const express = require("express")
const { getAllStudents, createStudent, getStudentById } = require("../controllers/studentsController")
const router = express.Router()


router.get("/", getAllStudents)
router.get("/:id", getStudentById)
router.post("/", createStudent)



module.exports = router