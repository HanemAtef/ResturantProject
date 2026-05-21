const Order = require("../models/order");
const { AppError } = require("../utils/errorUtils");


// @desc    Get my orders
// @route   GET /api/orders
// @access  Private
exports.getMyOrders = async (req, res, next) => {
  try {
    const filter = { user: req.user.id };
    if (req.query.status) {
      filter.status = req.query.status;
    }
    const orders = await Order.find(filter)
      .populate("items.meal", "title image")
      .sort("-createdAt");
    res.status(200).json({ results: orders.length, orders });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single order
// @route   GET /api/orders/:id
// @access  Private
exports.getSingleOrder = async (req, res, next) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user.id,
    }).populate("items.meal");
    if (!order) {
      return next(new AppError("Order not found", 404));
    }
    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};

// @desc    Update order status
// @route   PATCH /api/orders/:id/status
// @access  Admin
exports.updateOrderStatus = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return next(new AppError("Order not found", 404));
    }
    order.status = req.body.status;
    await order.save();
    res.status(200).json({ message: "Order status updated successfully", order });
  } catch (err) {
    next(err);
  }
};
