const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

//Find one
// User.findOne({ _id: '69a951aa99cb1a8bb70cc726' })
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//Find By ID
User.findById('69a951aa99cb1a8bb70cc726')
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});



//Insert Many
// User.insertMany([
//     {name: "Tony", email: "tony@gamil.com", age: 50},
//     {name: "Peter", email: "peter@gamil.com", age: 30},
//     {name: "Bruce", email: "bruce@gamil.com", age: 47},
// ]).then((res) => {
//     console.log(res);
// });


//Insert One
// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 48,
// });

// user2
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });