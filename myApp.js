let express = require("express");
let app = express();

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

console.log("Hello World");

module.exports = app;
