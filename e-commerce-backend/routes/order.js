const express = require("express");
const auth = require("../middleware/authMiddleware");
const { placeOrder } = require("../controllers/orderController");

const router = express.Router();
router.post("/", auth, placeOrder);

module.exports = router;