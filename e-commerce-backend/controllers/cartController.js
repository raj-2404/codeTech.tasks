const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ user: req.user.id });

  if (!cart) cart = new Cart({ user: req.user.id, items: [] });

  cart.items.push({ product: productId, quantity });
  await cart.save();
  res.json(cart);
};

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");
  res.json(cart);
};