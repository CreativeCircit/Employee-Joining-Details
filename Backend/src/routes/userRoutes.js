const express = require("express");
const {
  registerUser,
  getUserProfile,
  logoutUser,
  getAllUser,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Register user
router.post("/register",upload.single("photo"), registerUser);
router.post("/logout", protect, logoutUser);

// User profile (protected route)
router.get("/me", protect, getUserProfile);
router.get("/all", getAllUser);

module.exports = router;
