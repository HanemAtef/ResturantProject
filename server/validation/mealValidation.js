const joi = require("joi");

const createMealSchema = joi.object({
  title: joi.string().min(2).max(100).required(),
  description: joi.string().min(5).max(500).required(),
  price: joi.number().positive().required(),
  category: joi.string().min(2).max(50).required(),
  image: joi.string().uri().optional(),
});

const updateMealSchema = joi.object({
  title: joi.string().min(2).max(100).optional(),
  description: joi.string().min(5).max(500).optional(),
  price: joi.number().positive().optional(),
  category: joi.string().min(2).max(50).optional(),
  image: joi.string().uri().optional(),
});

module.exports = { createMealSchema, updateMealSchema };
