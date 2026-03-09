const express = require("express");
const app = express();

// app.use( (req, res, next) => {
//     console.log("Hi, I am 1st middleware");
//     next();
// });

// app.use( (req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });

// Utility Middleware (Logger)
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

// Middleware for specific path only
app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});

//API Access Token
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    res.send("ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
    res.send("Data");
});

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

// 404 Error
app.use((req, res) => {
    res.status(404).send("Page not found!");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});