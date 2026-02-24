const express = require("express");
const app = express();

let port = 3000;

app.listen(port , () => {
    console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    console.log(req.query);
    if(!q){
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search result for query: ${q}</h1>`)
})

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.get("*", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.post("/", (req, res) => {
//     res.send("you send a post request to root");
// });

// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li></ul>"
//     res.send(code);
// }); 