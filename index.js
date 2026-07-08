const express = require("express");
const userRoutes = require("./routes/userRoutes")
require("dotenv").config()

const app = express();


const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API Calling...");
});

// Middlewares
app.use(express.json())

// Routes
app.use("/users", userRoutes)

app.listen(PORT, () => {
  console.log(`Server running succesfully on PORT ${PORT}`);
});
