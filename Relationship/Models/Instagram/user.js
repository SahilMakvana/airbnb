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
    email: String,
});

const instaUser = mongoose.model("instaUser", userSchema);

const addUser = async () => {
    let user = new instaUser({
        username: "Sahil",
        email: "sahil.makvana@gmail.com",
    });

    let res = await user.save();
    console.log(res);
};

addUser();

module.exports = instaUser;
