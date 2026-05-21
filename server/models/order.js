const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  meal: { type: mongoose.Schema.Types.ObjectId, ref: "Meal", required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [orderItemSchema],
    subtotal: { type: Number, required: true },
    deliveryFee: { type: Number, default: 5 },
    tax: { type: Number, required: true },
    totalPrice: { type: Number, required: true },

    // Bug #14 fixed: paymentMethod field added
    paymentMethod: {
      type: String,
      enum: ["cash", "card", "online"],
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "preparing", "delivered", "cancelled"],
      default: "pending",
    },
    contactInformation: {
      fullName: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
    deliveryAddress: {
      streetAddress: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
