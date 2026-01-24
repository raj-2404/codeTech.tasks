const express = require("express");
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const { getMessages } = require("../controllers/chatController");

const router = express.Router();

router.get("/:roomId", auth, getMessages);

router.post("/upload", auth, upload.single("file"), (req, res) => {
  res.json({ file: req.file.filename });
});

module.exports = router;