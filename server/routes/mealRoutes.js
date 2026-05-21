const express = require("express");
const router = express.Router();
const { getMeals, getMeal, createMeal, updateMeal, deleteMeal, searchMeals } = require("../Controller/mealController");
const validate = require("../middleware/MiddlewareValidation");
const authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const { createMealSchema, updateMealSchema } = require("../validation/mealValidation");

// Public routes
router.get("/meals", getMeals);
router.get("/meals/search", searchMeals);
router.get("/meals/:id", getMeal);

// Protected admin routes
router.post("/meals", authMiddleware, adminMiddleware, validate(createMealSchema), createMeal);
router.put("/meals/:id", authMiddleware, adminMiddleware, validate(updateMealSchema), updateMeal);
router.delete("/meals/:id", authMiddleware, adminMiddleware, deleteMeal);

module.exports = router;
