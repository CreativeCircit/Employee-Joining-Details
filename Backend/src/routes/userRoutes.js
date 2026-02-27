const express = require("express");
const {
  registerEmployee,
  getEmployeeProfile,
  logoutUser,
  getAllUser,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");
const jwt = require("jsonwebtoken");

const router = express.Router();
router.post("/register",upload.single("photo"), registerEmployee);
router.post("/logout", protect, logoutUser);

router.get("/me", protect, getEmployeeProfile);
router.get("/all", getAllUser);

module.exports = router;
