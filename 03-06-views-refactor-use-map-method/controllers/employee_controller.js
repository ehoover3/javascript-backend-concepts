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
  let index = req.params.index;
  res.render("employee", {
    employees: data,
    index: index,
  });

  //   res.send(data);
});

module.exports = router;
