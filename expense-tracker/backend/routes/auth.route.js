const express = require("express");
const { protect } = require("../middlewares/auth.middleware.js");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/auth.controller.js");
const { upload } = require("../middlewares/upload.middleware.js");
const router = express.Router();

router.post("/register", upload.single("image"), registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);
router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({ imageUrl });
});

module.exports = router;
