const express = require("express");
const auth = require("../middleware/authMiddleware");
const { addToCart, getCart } = require("../controllers/cartController");

const router = express.Router();
router.post("/", auth, addToCart);
router.get("/", auth, getCart);

module.exports = router;