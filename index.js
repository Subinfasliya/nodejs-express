require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const { userRoutes } = require("./routes/userRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API Calling...",
  });
});

app.use("/api/auth/", userRoutes);
app.use((req, res, next) => {
  const error = new Error(`Api ${req.originalUrl} Not found`);
  error.statusCode = 404;
  next(error);
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});
