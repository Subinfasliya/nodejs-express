import { useEffect, useState } from "react";
import { createStudent, deleteStudent, getStudents } from "../../services/studentsService";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

const Home = () => {
  const [students, setStudents] = useState([]);

  const getAllStudents = async () => {
    try {
      const result = await getStudents();
      setStudents(result.data);
    } catch (error) {
      console.log(error);
    }
  };


// create students
const handleSave = async(student) => {
    try{
    await createStudent(student)

    }catch(error){
        console.log(error);
    }
}


// Delete student
const handleDelete = async(id)=>{
    
  try{
    await deleteStudent(id)
    getAllStudents()
  }catch(error){
    console.log(error);
    
  }
}

  useEffect(() => {
    getAllStudents();
  }, []);

  

  return (
    <>
      <StudentForm handleSave={handleSave}   />

      <StudentList students={students} handleDelete={handleDelete} />
    </>
  );
};
export default Home;
