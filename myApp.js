let express = require("express");
let app = express();

app.get("/", (request, response) => {
  response.send("Hello Express");
});

console.log("Hello World");

module.exports = app;
