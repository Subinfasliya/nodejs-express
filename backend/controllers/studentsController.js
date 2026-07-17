const Student = require("../models/studentModel");

const getAllStudents = async (req, res) => {
  try {
    const student = await Student.find();

    res.status(200).json({
      message: "Students Listing...",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get student by id
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Successfully fetched",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create Student
const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      message: "Successfully Created",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update student
const updateStudent = async (req, res) => {
  try {
    const { name, age } = req.body;

    if (!name || age === undefined) {
      return res.status(400).json({
        message: "Name and Age required",
      });
    }

    const studentData = {
      name,
      age,
    };

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      studentData,
      {
        returnDocument: "after",
      },
    );

    res.status(200).json({
      message: "Successfully updated",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Student
const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;

    if (!studentId) {
         return res.status(400).json({
          message:"Invalid Student ID"
         })  
     }

     const student = await Student.findByIdAndDelete(studentId)

     if(!student){
      return res.status(404).json({
        message:"Student not found"
      })
     }

     res.status(200).json({
      message:"Successfully deleted student",
     })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent
};
