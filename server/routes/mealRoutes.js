



module.exports = router;
const express=require('express');
const Router=express.Router();
const {getMeals,getMeal}=require("../Controller/mealController");
const validate = require("../middleware/MiddlewareValidation");
const {createMeal,updateMeal} = require("../Controller/mealController");
const {createMealSchema,updateMealSchema} = require("../validation/mealValidation");


// create
router.post("/", validate(createMealSchema),createMeal);

// update
router.put("/:id", validate(updateMealSchema), updateMeal );

// delete
router.delete("/:id", deleteMeal);
Router.get("/meals",getMeals);
Router.get("/meals/:id",getMeal);
module.exports=Router;
