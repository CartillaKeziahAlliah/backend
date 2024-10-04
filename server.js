const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
connectDB();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
