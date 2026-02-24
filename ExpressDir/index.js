const express = require("express");
const app = express();

console.log(app);

let port = 3000;

app.listen(port , () =>{
    console.log(`App is listening on port ${port}`);
});