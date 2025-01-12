require("dotenv").config();

let bodyParser = require("body-parser");

let express = require("express");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

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

app.get("/now", (request, response, next) => {
  request.time = new Date().toString();
  next();
}, (request, response) => {
  return response.json({ "time": request.time });
});

app.get("/:word/echo", (request, response) => {
  return response.json({ "echo": request.params.word });
});

app.route("/name").get((request, response) => {
  return response.json({
    "name": `${request.query.first} ${request.query.last}`,
  });
}).post((request, response) => {
  return response.json({
    "name": `${request.body.first} ${request.body.last}`,
  });
});

console.log("Hello World");

module.exports = app;
