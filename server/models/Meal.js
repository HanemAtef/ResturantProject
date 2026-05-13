    const mongoose = require("mongoose");
    const mealschema = new mongoose.Schema(
    {
        title: {
        typeof: String,
        required: true,
        },
        description: {
        typeof: String,
        required: true,
        },
        price: {
        typeof: Number,
        required: true,
        },
        image: {
        typeof: String,
        required: true,
        },
        category: {
        typeof: String,
        required: true,
        },
    },
    { timestamps: true },
    );
const Meal = mongoose.model("Meal", mealschema);
module.exports = Meal;
