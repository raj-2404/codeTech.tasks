const Message = require("../models/Message");

exports.getMessages = async (req, res) => {
  const { roomId } = req.params;
  const messages = await Message.find({ room: roomId });
  res.json(messages);
};