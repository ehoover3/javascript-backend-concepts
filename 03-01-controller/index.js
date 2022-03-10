require("dotenv").config();
const express = require("express");
const app = express();

// middleware
app.use("/zoo", require("./controllers/zoo"));

// routes
app.get("/", (req, res) => {
  res.send("welcome to the home page");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);

// NOTES
// launch server with node or nodemon, then try the following urls
// http://localhost:3000
// http://localhost:3000/zoo
// http://localhost:3000/zoo/bear
// http://localhost:3000/zoo/tiger
