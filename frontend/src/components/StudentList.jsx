import React from "react";

const StudentList = ({ students,handleDelete }) => {
  console.log(students.data);

  return (
    <>
      <h2>Student List </h2>
      <h2>{students.message}</h2>

      <ul>
        {students?.data?.map((student) => {
          return (
            <React.Fragment key={student._id}>
              <li>{student.name}</li>
              <li>{student.age}</li>
              <li><button onClick={()=> handleDelete(student._id)}>Delete</button></li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default StudentList;
