require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const User = require("./model/user");


const app = express();

app.use(express.json());

// Logic goes here

module.exports = app;
app.post("/register", (req, res) => {
    // our register logic goes here...
});

app.post("/login", (req, res) => {
    // our login logic goes here
});