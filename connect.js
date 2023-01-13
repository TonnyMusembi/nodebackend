const mysql = require("mysql");

const connection = mysql.createConnection({
    connectionLimit: 7,
    host: "localhost",
    user: "root",
    password: "tonny1724",
    database: "todoapp",
});

connection.connect(function(err) {
    if (err) {
        return console.error("error: " + err.message);
    } else {
        return err;
    }

    console.log("Connected to the MySQL server.");
});