const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

// localhost:3000
app.get("/", (req, res) => {
  res.send("welcome to the home page");
});

// query parameter
app.get("/:animal", (req, res) => {
  let animal = req.params.animal;
  res.send(`the query parameter is:  ${animal}`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// NOTES:
// 1. in your terminal, type in "node index.js" or "nodemon index.js"
// 2. then, in your browser, try the following url's
//    http://localhost:3000/animal/bird
//    http://localhost:3000/animal/cat
//    http://localhost:3000/animal/dog
