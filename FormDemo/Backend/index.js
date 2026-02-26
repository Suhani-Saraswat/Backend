const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`submitted GET response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`submitted POST response. Welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});