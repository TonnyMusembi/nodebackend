const express = require('express');
const app = require(express);
app.use(express.json());

app.get("/", (res, req) => {
    res.send("Hello")

});
app.listen(4000, () => console.log('tets'));