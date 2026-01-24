const Message = require("../models/Message");

module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("privateMessage", async ({ sender, receiver, text }) => {
      const msg = new Message({ sender, receiver, text });
      await msg.save();
      socket.emit("privateReceive", msg);
    });
  });
};