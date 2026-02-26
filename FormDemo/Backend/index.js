const express = require("express");
const app = express();
const port = 8080;

app.get("/require", (req, res) => {
    let { user, password } = res.query;
    res.send(`submitted GET response.Welcome ${user}`);
});

app.post("/require", (req, res) => {
    res.send("submitted POST response");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});