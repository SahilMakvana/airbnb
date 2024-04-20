const mongoose = require("mongoose");
const { Schema } = mongoose;

main().catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationship");
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("user", userSchema);

const addUser = async () => {
    let user = new User({
        username: "Sharelockholems",
        addresses: [
            {
                location: "221B Baker Street",
                city: "London",
            },
        ],
    });

    user.addresses.push({
        location: "23, Food Street",
        city: "New York",
    });

    let res = await user.save();
    console.log(res);
};

addUser();
