require("dotenv").config();
const express = require("express");
const app = express();

// ROUTES
// if...
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// else if...
app.get("/dog", (req, res) => {
  res.send("I love dogs!");
});

// else...
// 404 Error Page
app.get("*", (req, res) => {
  res.send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);

// NOTES:
// 1. in your terminal, type in "node index.js" or "nodemon index.js"
// 2. then, in your browser, try the following url's
//    http://localhost:3000/dog
//    http://localhost:3000/gibberish
//    http://localhost:3000/asdfghjkl
