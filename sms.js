const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/ussd", (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    if (text === "") {
        // This is the first request. Note how we start the response with CON
        const response = `CON What would you like to do?
    1. Check my account balance
    2. Top up airtime`;
        res.send(response);
    } else if (text === "1") {
        // Business logic for first level response
        const accountNumber = "ACCOUNT NUMBER: XXXXXXXX";
        const balance = "BALANCE: KES XXXXXX";
        const response = `CON ${accountNumber}
    ${balance}`;
        res.send(response);
    } else if (text === "2") {
        // Business logic for first level response
        const response = `CON Please enter the amount you would like to top up.`;
        res.send(response);
    } else if (text.startsWith("2*")) {
        // This is a second level response where the user selected 1 in the first level
        const amount = text.split("*")[1];
        const response = `END You have topped up KES ${amount}. Your new balance is KES XXXXXX`;
        res.send(response);
    } else {
        res.status(400).send("Bad request!");
    }
});

app.listen(3007, () => {
    console.log("Server started on port 3007");
});