const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Suh@12MyS'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
}

//Inserting New Data
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for(let i=1; i<=100; i++){
//     data.push(getRandomUser()); //100 fake users
// }



app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
     try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]["count(*)"]);
            res.send("success");
        });
    } catch (err) {
        console.log(err);
        res.send("some error in database");
    }
});

app.listen("8080", () => {
    console.log("server is listening to port 8080");
});

// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// } catch (err) {
//     console.log(err);
// }
// connection.end();