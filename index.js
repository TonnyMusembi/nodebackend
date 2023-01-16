const express = require('express');
const jwt = require("jsonwebtoken");
// const app = require(express);
// app.use(express.json());
const app = express();

const port = 3005;
app.get("/token", (res, req) => {
    const payload = {
        name: "Tony"
    };
    const token = jwt.sign(payload, "super secret key");
    res.send(token);
});
app.get("/", (res, req) => {
    res.send("Hello")

});
app.get("/customer", (req, res) => {
    res.send("Hello, World!");
});
app.get("/users", (res, req) => {
    res.send("Hello, World!");
});
app.post("/", (res, req) => {

})

app.post("/login", (res, req) => {
    res.send("Hello");

});
app.listen(port, () => console.log(`app running on http://127.0.0.1:${port}`));