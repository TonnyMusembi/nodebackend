const express = require("express");
const app = express();
const sales = require("./data.js");

app.listen(5001, () => {
    console.log("server is listening on port 5001");
});

app.get("/api/sales", (req, res) => {
    res.json(sales);
    console.log(sales);
});