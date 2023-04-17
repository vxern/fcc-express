let express = require("express");
let app = express();

app.use("/public", express.static(`${__dirname}/public`));

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

console.log("Hello World");

module.exports = app;
