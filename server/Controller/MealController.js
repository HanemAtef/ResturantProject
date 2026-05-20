const Meal = require("../models/Meal");
// Create Meal
const createMeal = async (req, res) => {

    const { title, description, price, category } = req.body;


    const meal = await Meal.create(req.body)

    res.status(201).json({
        msg: "Meal created successfully",
        data: meal
    })
};


// updating Meal 

const updateMeal = async (req, res) => {

    const meal = await Meal.findById(req.params.id)

    if (!meal) {
        return res.status(404).json({
            msg: "Meal not found",
        });
    }


    Object.assign(meal, req.body);

    await meal.save();
    res.status(200).json({
        msg: "Meal updated successfully",
        data: meal,
    });
};



// Delete Meal
const deleteMeal = async (req, res) => {

    const meal = await Meal.findById(req.params.id)

    if (!meal) {
        return res.status(404).json({
            msg: "Meal not found",
        });
    }

  await meal.deleteOne();

   res.status(200).json({
        msg: "Meal deleted successfully"
    
    });
}

module.exports = {
    createMeal,
    updateMeal,
    deleteMeal
}