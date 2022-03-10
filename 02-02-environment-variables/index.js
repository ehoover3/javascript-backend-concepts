require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/second", (req, res) => {
  res.send("my second page");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
