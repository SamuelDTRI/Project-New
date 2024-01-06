// This module is responsible for creating our Back-End application or server.
const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/index");

const app = express(); // We instantiate Express to start it as our application.

app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("Middleware processing request."); // The middleware processes requests and responds based on our instructions.
  next();
});

app.use(express.json()); // Express.json is used for reading JSON formats or, in our case, reading user creation information.
app.use(mainRouter); // We use the main router to redirect requests that reach our application.

module.exports = app;
