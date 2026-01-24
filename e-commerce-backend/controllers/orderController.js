const Order = require("../models/Order");
const Cart = require("../models/Cart");

exports.placeOrder = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id });

  const total = cart.items.reduce((sum, i) => sum + i.quantity * 100, 0);

  const order = new Order({
    user: req.user.id,
    items: cart.items,
    totalAmount: total
  });

  await order.save();
  await Cart.deleteOne({ user: req.user.id });

  res.json(order);
};