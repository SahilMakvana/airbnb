const mongoose = require("mongoose");
const { Schema } = mongoose;
const instaUser = require("./user");

main().catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationship");
}

const postSchema = new Schema({
    content: String,
    like: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "Order",
    },
});

const instaPost = mongoose.model("instaPost", postSchema);

const addPost = async () => {
    let post = new instaPost({
        content: "This is my post !!",
        like: 153,
    });

    let user = new instaUser({
        username: "Sahil",
        email: "sahil.makvana@gmail.com",
    });

    let res = await user.save();

    post.user = user;

    let res1 = await post.save();
    console.log(res);
    console.log(res1);
};

addPost();
