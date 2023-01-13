const express = require("express");
const mysql = require("mysql");
// var con = mysql.create()
const app = express();
const port = 3005;

var conn = mysql.createConnection({
    connectionLimit: 7,
    host: "localhost",
    user: "root",
    password: "hh",
    database: "todoapp",
});

conn.connect(function(err) {
    if (err) {
        return console.error("error: " + err.message);
    } else {
        return err;
    }

    console.log("Connected to the MySQL server.");
});

app.listen(port, () => {
    console.log(`app running on http://127.0.0.1:${port}`);
});