const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
("");

// ROUTES
app.get("/", function (req, res) {
  res.send("Welcome to the server");
});

module.exports = app;
