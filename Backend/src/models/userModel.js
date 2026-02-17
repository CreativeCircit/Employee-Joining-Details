const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// 1. Sub-schema for Emergency Contacts (to ensure structure)
const emergencyContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  relation: { type: String, required: true },
}, { _id: false });

const userModel = new mongoose.Schema(
  {
    // --- Section 1: Photo ---
    // Store the URL (e.g., from Cloudinary or local upload path)
    passportPhoto: { 
      type: String, 
      required: [true, "Passport photo is required"] 
    },

    // --- Section 2: Personal Details ---
    personalDetails: {
      fullName: { 
        type: String, 
        required: [true, "Full Name is required"] 
      },
      contactNumber: { 
        type: String, 
        required: [true, "Contact Number is required"] 
      },
      emergencyContactNumber: { 
        type: String, 
        required: [true, "Emergency Contact Number is required"] 
      },
      personalEmail: {
        type: String,
        required: [true, "Personal Email is required"],
        unique: true, // Prevents duplicate profiles
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please enter a valid email",
        ],
      },
      panNumber: { 
        type: String, 
        required: true, 
        uppercase: true, // Auto-converts to UPPERCASE
        unique: true 
      },
      adhaarNumber: { 
        type: String, 
        required: true, 
        unique: true 
      },
      dobAdhaar: { type: Date, required: true },
      dobOriginal: { type: Date, required: true },
      fatherName: { type: String, required: true },
      bloodGroup: { type: String, required: true },
      adhaarAddress: { type: String, required: true },
      currentAddress: { type: String, required: true },
      marriedStatus: { 
        type: String, 
        enum: ["Yes", "No"], 
        required: true 
      },
    },

    // --- Section 3: Emergency Contact Details (Array) ---
    emergencyContacts: {
      type: [emergencyContactSchema],
      validate: {
        validator: function(v) {
          return v && v.length === 3; // Enforce exactly 3 contacts based on your form
        },
        message: "You must provide exactly 3 emergency contacts."
      }
    },

    // --- Section 4: Professional Details ---
    professionalDetails: {
      dateOfJoining: { type: Date, required: true },
      workLocation: { type: String, required: true },
      designation: { type: String, required: true },
      totalExperience: { type: String, required: true },
      previousOrganization: { type: String, required: true },
    },

    // --- Section 5: Account Details ---
    accountDetails: {
      uanNumber: { type: String,  unique: true },
      bankName: { type: String, },
      bankAccountNumber: { type: String, },
      ifscCode: { 
        type: String, 
        uppercase: true 
      },
    }
  },
  {
    timestamps: true, 
  }
);

const Employee = mongoose.model("Employee", userModel);
module.exports = Employee;
