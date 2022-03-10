const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/second", (req, res) => {
  res.send("my second page");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
