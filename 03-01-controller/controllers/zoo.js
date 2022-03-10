const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("welcome to the zoo subpage");
});

router.get("/bear", (req, res) => {
  res.send("get a bear");
});

router.get("/monkey", (req, res) => {
  res.send("get a monkey");
});

router.get("/tiger", (req, res) => {
  res.send("get a tiger");
});

module.exports = router;
