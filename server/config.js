const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const morgan = require("morgan");
let = dotenv = require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

const routes = require("../routes/routes");

routes(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Started on PORT` + process.env.PORT);
});
