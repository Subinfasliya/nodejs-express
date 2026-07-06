const express = require("express");

const app = express();

const PORT = 3000;

const users = [
  { id: 1, name: "Subin", age: 25 },
  { id: 2, name: "Fasliya", age: 24 },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get all Users
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id",(req,res) =>{
    const userId = Number(req.params.id)
    const user = users.find((user) => user.id === userId)

    if(!user){
        return res.status(404).json({
            message:"User not found",
        })
    }

    res.json(user)
})

app.listen(PORT, () => {
  console.log(`Server Successfully Running On PORT ${PORT}`);
});
