const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

main()
    .then(async () => {
        console.log("Connected Successfully to MongoDB");
        console.log(initData.data);
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://localhost:27017/airbnb");
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data Added Successfully");
};

initDB();
