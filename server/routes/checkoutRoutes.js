const express = require("express");
const router = express.Router();
const { getCheckout, placeOrder } = require("../Controller/checkoutController");
const authMiddleware = require("../middleware/authmiddleware");

router.get("/", authMiddleware, getCheckout);
router.post("/place-order", authMiddleware, placeOrder);

module.exports = router;
