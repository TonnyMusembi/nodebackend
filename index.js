const express = require('express');
// const app = require(express);
// app.use(express.json());
const app = express();

const port = 3005;

// app.get("/", (res, req) => {
//     res.send("Hello")

// });
app.get("/", (req, res) => {
    res.send("Hello, World!");
});


app.post("/login", async(res, req) => {

    try {




    } catch (error) {

    }




});
app.listen(port, () => console.log(`app running on http://127.0.0.1:${port}`));