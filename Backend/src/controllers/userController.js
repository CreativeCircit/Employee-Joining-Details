const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const uploadToCloudinary = require("../utils/uploadToCloudinary");

const registerUser = async (req, res) => {
  try {
    console.log("--- 1. Request Received ---");
    console.log("File:", req.file ? "File attached" : "No file");
    console.log("Body (Raw):", req.body); // See if data is arriving

    if (!req.file) {
      return res.status(400).json({ message: "Passport photo is required" });
    }

    // 1. Upload to Cloudinary
    console.log("--- 2. Uploading to Cloudinary ---");
    const result = await uploadToCloudinary(req.file.buffer);
    console.log("Upload Success:", result.secure_url);

    // 2. Parse Data
    console.log("--- 3. Parsing JSON ---");
    const {
      personalDetails,
      emergencyContacts,
      professionalDetails,
      accountDetails
    } = req.body;

    // CRITICAL DEBUG: Check if these exist
    if (!personalDetails) throw new Error("personalDetails is missing from req.body");

    // Helper to safely parse or return if already object
    const parseIfNeeded = (data) => {
       if (typeof data === 'string') return JSON.parse(data);
       return data; // It's already an object (e.g. from Postman raw JSON)
    };

    const newEmployee = await User.create({
      passportPhoto: result.secure_url,
      personalDetails: parseIfNeeded(personalDetails),
      emergencyContacts: parseIfNeeded(emergencyContacts),
      professionalDetails: parseIfNeeded(professionalDetails),
      accountDetails: parseIfNeeded(accountDetails),
    });

    console.log("--- 4. Database Save Success ---");
    res.status(201).json({
      success: true,
      message: "Employee registered successfully",
      data: newEmployee,
    });

  } catch (error) {
    console.error("❌ ERROR DETAILS:", error); // <--- LOOK AT THIS IN TERMINAL
    
    // Handle Duplicate Key Errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return res.status(400).json({ message: `Duplicate value entered for ${field}` });
    }
    
    // Handle Validation Errors (Mongoose)
    if (error.name === 'ValidationError') {
        const messages = Object.values(error.errors).map(val => val.message);
        return res.status(400).json({ message: messages.join(', ') });
    }

    // Send actual error message to frontend for debugging
    res.status(500).json({ message: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("customers");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logoutUser = (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
    });
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  registerUser,
  getUserProfile,
  logoutUser,
};
