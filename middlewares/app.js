const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

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
    throw new ExpressError(401 ,"ACCESS DENIED!");
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

// Custom Error Handling
app.get("/err", (req, res) => {
    abcd = abcd;
});

// Activity
app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is Forbidden");
});

app.use((err, req, res, next) => {
    // console.log("--------ERROR--------");
    let { status = 500, message = "SOME ERROR" } = err;
    res.status(status).send(message);
});

// 404 Error
app.use((req, res) => {
    res.status(404).send("Page not found!");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});