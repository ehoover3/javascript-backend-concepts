// DEPENDENCIES
const express = require("express");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Home Page");
});

// ROUTER
const employeesController = require("./controllers/employeesController.js");
app.use("/employees", employeesController);

// LISTEN
app.listen(PORT, () => {
  console.log("Listening at port", PORT);
});

// tests
// http://localhost:3000/employees
// http://localhost:3000/employees/0
// http://localhost:3000/employees/1
