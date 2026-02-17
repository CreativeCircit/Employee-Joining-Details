<<<<<<< HEAD
const express = require("express");
const {
  registerUser,
  getUserProfile,
  logoutUser,
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

module.exports = router;
=======
const express = require("express");
const {
  registerUser,
  getUserProfile,
  logoutUser,
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

module.exports = router;
>>>>>>> 97d6a8b9c8949fdabad2be4eca703e5ef61b3f65
