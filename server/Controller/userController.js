const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation/authvalidation");
// ────────────────────────────────────────────────────────────────
// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
// ────────────────────────────────────────────────────────────────
const register = async (req, res, next) => {
    try {

        const { name, email, password, role, phone, address } = req.body;
        const { error } = registerValidation(req.body);
        if (error) return res.status(400).json({ msg: error.details[0].message });

        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                msg: "Account already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword, role, phone, address });



        res.status(201).json({
            status: "success",
            message: "Account created successfully",
            data: {
                user: {
                    id: user._id,
                    name,
                    email,
                    role,
                    phone,
                    address
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
        const { error } = loginValidation(req.body);
        if (error) return res.status(400).json({ msg: error.details[0].message });
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ msg: "Account not found" });
        }

        const { name, role, phone, address } = user;

        // 3) Compare password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({
                msg: "Invalid email or password"
            });
        }

        // 4) Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });

        // 5) Respond
        res.status(200).json({
            status: "success",
            message: "Logged in successfully",
            token,
            data: {
                user: {
                    id: user._id,
                    name,
                    email,
                    role,
                    phone,
                    address,
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