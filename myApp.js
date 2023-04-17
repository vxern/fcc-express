require("dotenv").config();

let express = require("express");
let app = express();

app.use((request, response, next) => {
  console.log(`${request.method} ${request.path} - ${request.ip}`);
  next();
});

app.use("/public", express.static(`${__dirname}/public`));

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

const JSON_MESSAGE = "Hello json";

app.get("/json", (request, response) => {
  const isUppercase = process.env.MESSAGE_STYLE === "uppercase";

  if (isUppercase) {
    return response.json({ "message": JSON_MESSAGE.toUpperCase() });
  } else {
    return response.json({ "message": JSON_MESSAGE });
  }
});

console.log("Hello World");

module.exports = app;
