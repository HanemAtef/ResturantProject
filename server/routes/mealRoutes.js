const express = require("express");
const router = express.Router();
const validate = require("../middleware/MiddlewareValidation");
const {createMeal,updateMeal} = require("../Controller/mealController");
const {createMealSchema,updateMealSchema} = require("../validation/mealValidation");


// create
router.post("/", validate(createMealSchema),createMeal);

// update
router.put("/:id", validate(updateMealSchema), updateMeal );

// delete
router.delete("/:id", deleteMeal);


module.exports = router;