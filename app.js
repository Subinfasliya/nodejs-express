require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const { userRoutes } = require("./routes/userRoute");
const errorHandler = require("./middlewares/errorHandler");
const { rootRoute } = require("./routes/rootRoute");


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

connectDB();

app.use("/", rootRoute);

app.use("/api/v1/users", userRoutes);

app.use((req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  error.statusCode = 404;
  return next(error);
});

app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});
