const express = require("express");
const app = express();

let port = 3000;

app.listen(port , () => {
    console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});

app.get("*", (req, res) => {
    res.send("this path does not exits");
});

app.post("/", (req, res) => {
    res.send("you send a post request");
});

// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li></ul>"
//     res.send(code);
// });