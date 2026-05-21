const Cart = require("../models/Cart");
const Order = require("../models/order");
const { AppError } = require("../utils/errorUtils");


// @desc    Get checkout details
// @route   GET /api/checkout
// @access  Private
exports.getCheckout = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("items.meal");
    if (!cart || cart.items.length === 0) {
      return next(new AppError("Cart is empty", 400));
    }
    const subtotal = cart.items.reduce((acc, item) => acc + item.meal.price * item.quantity, 0);
    const deliveryFee = 5;
    const tax = subtotal * 0.07;
    const totalPrice = subtotal + deliveryFee + tax;
    res.status(200).json({ items: cart.items, subtotal, deliveryFee, tax, totalPrice });
  } catch (err) {
    next(err);
  }
};

// @desc    Place order
// @route   POST /api/checkout/place-order
// @access  Private
exports.placeOrder = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("items.meal");
    if (!cart || cart.items.length === 0) {
      return next(new AppError("Cart is empty", 400));
    }
    const subtotal = cart.items.reduce((acc, item) => acc + item.meal.price * item.quantity, 0);
    const deliveryFee = 5;
    const tax = subtotal * 0.07;
    const totalPrice = subtotal + deliveryFee + tax;

    const orderItems = cart.items.map((item) => ({
      meal: item.meal._id,
      quantity: item.quantity,
      price: item.meal.price,
    }));

    const order = await Order.create({
      user: req.user.id,
      items: orderItems,
      subtotal,
      deliveryFee,
      tax,
      totalPrice,
      paymentMethod: req.body.paymentMethod,
      contactInformation: {
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
      },
      deliveryAddress: {
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        postalCode: req.body.postalCode,
      },
    });

    cart.items = [];
    await cart.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    next(err);
  }
};
