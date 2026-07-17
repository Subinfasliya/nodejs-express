import { useState } from "react";

const StudentForm = ({handleSave}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSave({
        name,
        age
    })
  };

  return (
    <div>
      <h2>StudentForm</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            value={age}
            type="number"
            name="age"
            id="age"
            placeholder="Enter your Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
