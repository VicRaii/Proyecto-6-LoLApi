require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const championsRouter = require("./src/api/routes/Champion");
const regionsRouter = require("./src/api/routes/Region");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/v1/regions", regionsRouter);
app.use("/api/v1/champions", championsRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route Not Found");
});

app.listen(3000, () => {
  console.log("Server started on: http://localhost:3000");
});
