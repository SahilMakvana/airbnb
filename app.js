const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Listing = require("./models/listing");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/expressError.js");
const { PassThrough } = require("stream");

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// MongoDB Connection
main()
    .then(() => {
        console.log("Connected Successfully to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}

// API
app.get("/", (req, res) => {
    res.send("Hi I am root");
});

// app.get("/testlistning", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My new villa",
//         descriprion: "By the bench",
//         price: 1100,
//         location: "Mumbai",
//         country: "India",
//     });

//     await sampleListing.save();
//     console.log("Sample was saved successfully");
//     res.send("Successull Testing");
// });

// Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
});

// New Route
app.get("/listing/new", (req, res, next) => {
    try {
        res.render("./listings/new.ejs");
    } catch (err) {
        next(err);
    }
});

// Show Route
app.get("/listing/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/show.ejs", { listing });
});

// Create Route
app.post(
    "/listings",
    wrapAsync(async (req, res, next) => {
        if (!req.body.listing) {
            throw new ExpressError();
        }
        let { title, description, image, price, location, country } = req.body;
        let listing = {
            title: title,
            description: description,
            image: image,
            price: price,
            location: location,
            country: country,
        };
        console.log(listing);
        let newListing = new Listing(listing);
        await newListing.save();
        res.redirect("/listings");
    })
);

// Edit Route
app.get("/listing/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
});

// Update Route
app.put("/listings/:id", async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing");
    }
    let { id } = req.params;
    let { title, description, image, price, location, country } = req.body;
    let listingData = {
        title: title,
        description: description,
        image: image,
        price: price,
        location: location,
        country: country,
    };
    const listing = await Listing.findByIdAndUpdate(id, listingData, { new: true });
    res.render("./listings/show.ejs", { listing });
});

// Delete Route
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});

// Error Generator for non valid page
// app.all("*", (req, res, next) => {
//     next(new ExpressError(404, "Page Not Found!"));
// });

// Error Middleware
app.use("/", (err, req, res, next) => {
    let { statusCode = 500, message } = err;
    // res.status(statusCode).send(message);
    console.log(message);
    res.render("./listings/error.ejs", { message });
});

// Listning on PORT
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
