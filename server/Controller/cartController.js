const Cart = require("../models/Cart.js");
const Meal = require("../models/Meal.js");

// ─── Add To Cart ─────────────────────────────────────────────────────────────
const add_cart = async (req, res) => {
  const userId = req.user.id; // من الـ token
  const { mealId, quantity } = req.body;

  try {
    const meal = await Meal.findById(mealId);
    if (!meal) return res.status(404).json({ message: "Meal not found" });

    let cart = await Cart.findOne({ userId });

    if (cart) {
      const mealIndex = cart.meal.findIndex(
        (item) => item.mealId.toString() === mealId
      );
      if (mealIndex > -1) {
        cart.meal[mealIndex].quantity += quantity;
      } else {
        cart.meal.push({ mealId, quantity, title: meal.title, image: meal.image, price: meal.price });
      }
    } else {
      cart = new Cart({
        userId,
        meal: [{ mealId, quantity, title: meal.title, image: meal.image, price: meal.price }],
      });
    }

    cart.totalPrice = cart.meal.reduce((total, item) => total + item.price * item.quantity, 0);

    const savedCart = await cart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─── Get User Cart ────────────────────────────────────────────────────────────
const get_cart = async (req, res) => {
  const userId = req.user.id; // من الـ token

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─── Update Meal Quantity ─────────────────────────────────────────────────────
const update_cart = async (req, res) => {
  const userId = req.user.id; // من الـ token
  const { mealId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const mealIndex = cart.meal.findIndex((item) => item.mealId.toString() === mealId);
    if (mealIndex === -1) return res.status(404).json({ message: "Meal not found in cart" });

    if (quantity <= 0) {
      cart.meal.splice(mealIndex, 1);
    } else {
      cart.meal[mealIndex].quantity = quantity;
    }

    cart.totalPrice = cart.meal.reduce((total, item) => total + item.price * item.quantity, 0);

    const updatedCart = await cart.save();
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─── Remove Meal From Cart ────────────────────────────────────────────────────
const remove_from_cart = async (req, res) => {
  const userId = req.user.id; // من الـ token
  const { mealId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.meal = cart.meal.filter((item) => item.mealId.toString() !== mealId);
    cart.totalPrice = cart.meal.reduce((total, item) => total + item.price * item.quantity, 0);

    const updatedCart = await cart.save();
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ─── Clear Entire Cart ────────────────────────────────────────────────────────
const clear_cart = async (req, res) => {
  const userId = req.user.id; // من الـ token

  try {
    const cart = await Cart.findOneAndDelete({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { add_cart, get_cart, update_cart, remove_from_cart, clear_cart };