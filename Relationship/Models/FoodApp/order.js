const mongoose = require("mongoose");
const { Schema } = mongoose;

main().catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationship");
}

const orserSchema = new Schema({
    item: String,
    price: Number,
});

const Order = mongoose.model("order", orserSchema);

const addOrder = async () => {
    let res = await Order.insertMany([
        {
            item: "Pizza",
            price: 279,
        },
        {
            item: "Samosa",
            price: 12,
        },
        {
            item: "Chips",
            price: 40,
        },
        {
            item: "Chocolates",
            price: 100,
        },
    ]);

    console.log(res);
};

addOrder();

module.exports = Order;
