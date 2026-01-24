const Message = require("../models/Message");

module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("joinRoom", ({ room }) => {
      socket.join(room);
    });

    socket.on("sendMessage", async ({ room, sender, text }) => {
      const msg = new Message({ room, sender, text });
      await msg.save();
      io.to(room).emit("receiveMessage", msg);
    });
  });
};