const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation/authvalidation");

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const register = async (req, res, next) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const { error } = registerValidation(req.body);
    if (error) return res.status(400).json({ msg: error.details[0].message });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Account already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword, role: "user", phone, address });

    res.status(201).json({
      status: "success",
      message: "Account created successfully",
      data: {
        user: { id: user._id, name, email, role: user.role, phone, address },
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Login user and return JWT
// @route   POST /api/users/login
// @access  Public
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({ msg: error.details[0].message });

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ msg: "Account not found" });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "30d" });

    const { name, role, phone, address } = user;
    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      token,
      data: {
        user: { id: user._id, name, email, role, phone, address },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
