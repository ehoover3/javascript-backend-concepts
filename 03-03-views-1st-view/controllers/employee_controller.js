const express = require("express");
const router = express.Router();
const data = require("../models/employee_data.js");

router.get("/", (req, res) => {
  res.render("employeesList", {
    employees: data,
  });
});

// SHOW
router.get("/:index", (req, res) => {
  res.send(data[req.params.index]);
});

module.exports = router;
