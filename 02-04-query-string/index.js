require("dotenv").config();
const express = require("express");
const app = express();

// routes
app.get("/", (req, res) => {
  res.send("home page");
});

// query string
// localhost:3000/math?number=5
app.get("/math", (req, res) => {
  const number = req.query.number;
  res.send(
    `<p>Your query string is: ${number}</p>
     <p>${number} * ${number} = ${number * number}</p>`
  );
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

// NOTES:
// 1. in your terminal, type in "node index.js" or "nodemon index.js"
// 2. then, in your browser, try the following url's
//    http://localhost:3000/math?number=5
//    http://localhost:3000/math?number=100
