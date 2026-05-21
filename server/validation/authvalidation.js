const joi = require("joi");

const registerValidation = (data) => {
  const schema = joi.object({
    name: joi.string().min(3).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(100).required(),
    phone: joi.string().pattern(/^\d{11}$/).required(),
    address: joi.string().required(),
    role: joi.string().valid('user', 'admin').optional(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(100).required(),
  });
  return schema.validate(data);
};

module.exports = { registerValidation, loginValidation };
