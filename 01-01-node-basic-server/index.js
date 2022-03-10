let http = require("http");

let server = http.createServer(function (req, res) {
  res.write("Hello world!");
  res.end();
});

server.listen(3000, function () {
  console.log("Listening on port 3000");
});
