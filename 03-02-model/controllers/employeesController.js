const express = require("express");
const router = express.Router();

// 1. set variable to employees data
const employeesData = require("../models/employeesData.js");

// 2. get all employees data
router.get("/", (req, res) => {
  res.send(employeesData);
});

// 3. get specific employee data
router.get("/:employee", (req, res) => {
  res.send(employeesData[req.params.employee]);
});

module.exports = router;
