const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");

app.use(cors());
app.use(bodyparser.json());

const user = require("./routers/user.router");
app.use("/api/v1", user);

module.exports = app;
