const User = require("../models/User");
const generateToken = require("../middleware/authmiddleware");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {  registerValidation, loginValidation } = require("../validation/authvalidation");
const   Joi = require("joi");

// ────────────────────────────────────────────────────────────────
// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
// ────────────────────────────────────────────────────────────────
const register = async (req, res,next) => {
    try {
        const { name, email, password, role, phone, address } = req.body;

// check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                msg: "Account already exists"
            });
        }


        const user = await User.create({ name, email, password, role, phone, address });


        const token = generateToken(user._id);


        res.status(201).json({
            status: "success",
            message: "Account created successfully",
            token,
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    phone: user.phone,
                    address: user.address,
                },
            },
        });
    } catch (error) {
       next(error);
    }

};


// ────────────────────────────────────────────────────────────────
// @desc    Login user and return JWT
// @route   POST /api/auth/login
// @access  Public
// ────────────────────────────────────────────────────────────────
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // 1) Find user and explicitly include password
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
             return res.status(400).json({
                msg: "Account not found"
            });
        }

        // 3) Compare password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({
                msg: "Invalid email or password"
            });
        }

        // 4) Generate token
        const token = generateToken(user._id);

        // 5) Respond
        res.status(200).json({
            status: "success",
            message: "Logged in successfully",
            token,
            data: {
                user: {
                 id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    phone: user.phone,
                    address: user.address,
                },
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login
};