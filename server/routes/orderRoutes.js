const express = require("express");
const router = express.Router();
const { getMyOrders, getSingleOrder, updateOrderStatus } = require("../Controller/orderController");
const authMiddleware = require("../middleware/authmiddleware");

router.get("/", authMiddleware, getMyOrders);
router.get("/:id", authMiddleware, getSingleOrder);
router.patch("/:id/status", authMiddleware, updateOrderStatus);

module.exports = router;
