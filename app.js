const express = require("express");
const connectDB = require("./config/db");
const studentsRoute = require("./routes/studentsRoute");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Calling...");
});

app.use("/students", studentsRoute);

app.listen(PORT, () => {
  console.log(`Server running successfully`);
});
