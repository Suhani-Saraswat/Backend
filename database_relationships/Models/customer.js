const mongoose = require("mongoose");
const {Schema} =mongoose; 

main()
.then(() => console.log("connection successful"))
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
}

const orderSchema = new Schema({
    item: String,
    price: Number
});

const Order = mongoose.model("Order", orderSchema);
const customerSchema = mongoose.model("Cust0mer", CustomarSchema);

const customerSchema = new Schemma({
    name: String.
    orders [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        }
    ],
});

// const addOders = async () => {
//     let res = await Order.insertMany([
//         { item: "Somasa", orice: 12 },
//         { item: "Chips", orice: 10 },
//         { item: "Chocolate", price: 40 },
//     ]);
//     console.log(res);
// };

addOrders();