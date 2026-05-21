const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  add_cart,
  get_cart,
  update_cart,
  remove_from_cart,
  clear_cart,
} = require("../Controller/cartController");

router.use(authMiddleware);

router.post("/", add_cart);
router.get("/", get_cart);
router.put("/", update_cart);
router.delete("/:mealId", remove_from_cart);
router.delete("/", clear_cart);

module.exports = router;