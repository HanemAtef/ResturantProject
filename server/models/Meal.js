  const mongoose=require ("mongoose");
    const mealschema = new mongoose.Schema(
    {
        title: {
        type: String,
        required: true,
        },
        description: {
        type: String,
        required: true,
        },
        price: {
        type: Number,
        required: true,
        },
        image: {
        type: String,
        required: true,
        },
        category: {
        type: String,
        required: true,
        },
    },
    { timestamps: true },
    );
    mealschema.index({
    title: "text",
    category: "text",
    }); 
const Meal = mongoose.model("Meal", mealschema);
module.exports = Meal;
