// DEPENDENCIES
const express = require("express");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// ROUTES
app.get("/", (req, res) => {
  res.send("Human Resources - Home Page");
});

// employees
const employeeController = require("./controllers/employee_controller.js");
app.use("/employees", employeeController);

// LISTEN
app.listen(PORT, () => {
  console.log("Listening at port", PORT);
});
