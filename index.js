const express = require("express");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

const users = [
  { id: 1, name: "Subin", age: 25 },
  { id: 2, name: "Fasliya", age: 24 },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get all Users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// Get user by id
app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
});

// Create user
app.post("/users", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      message: "Name and Age are required",
    });
  }

  const newUser = {
    id: users.length + 1,
    name: name,
    age: age,
  };

  users.push(newUser);

  res.status(201).json({
    message: "Successfully Created new user",
  });
});

// Update user
app.put("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const { name, age } = req.body;

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "User Id not found",
    });
  }

  user.name = name;
  user.age = age;

  res.status(200).json({
    message: "Successfully updated user",
  });
});

// Delete a user
app.delete("/users/:id", (req, res) => {
  const user_id = Number(req.params.id);

  const index = users.findIndex((user) => user.id === user_id);

  if (index === -1) {
    return res.status(404).json({
      message: "user not found",
    });
  }
  

  users.splice(index,1)

  res.status(200).json({
    message:"User Deleted successfully"
  })

});

app.listen(PORT, () => {
  console.log(`Server Successfully Running On PORT ${PORT}`);
});
