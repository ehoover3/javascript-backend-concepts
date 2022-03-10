require("dotenv").config();
const express = require("express");
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/dog", (req, res) => {
  res.send("I read existing data about a dog");
});

app.post("/dog", (req, res) => {
  res.send("I created new data about a dog");
});

app.put("/dog", (req, res) => {
  res.send("I completely edit this data");
});

app.patch("/dog", (req, res) => {
  res.send("I partially edit some of this data");
});

app.delete("/dog", (req, res) => {
  res.send("I deleted the data");
});

// 404 Error Page
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>"); // <----- status(404) added here
});

app.listen(process.env.PORT);

// NOTES:
// 1. Download Postman from <https://www.postman.com/downloads/>
// 2. Tests get, post, put, patch, & delete routes on Postman
