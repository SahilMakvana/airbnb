const mongoose = require("mongoose");
const { Schema } = mongoose;
const Order = require("./order");

main().catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationship");
}

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});

const Customer = mongoose.model("customer", customerSchema);

const addCustomer = async () => {
    let res = new Customer({
        name: "Rahul Kumar",
    });

    let order1 = await Order.findOne({ item: "Chips" });
    let order2 = await Order.findOne({ item: "Chocolates" });

    res.orders.push(order1);
    res.orders.push(order2);

    let result = await res.save();

    console.log(result);
};

addCustomer();
