const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
});

const Book = mongoose.model("Book", bookSchema);

let book3 = new Book({
    title: "How to kill a Mockingbird",
    author: "Harper Lee",
    price: "299",
});

book3.save()
.then((res) => {
    console.log(res);
}) .catch ((err) => {
    console.log(err);
});