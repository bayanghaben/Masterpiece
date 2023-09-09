const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      // required: true,
      min: 6,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "superAdmin",
    },

    phoneNumber: Number,
    city: String,
    country: String,
    role: {
      type: String,
      enum: ["user", "admin", "superAdmin"],
      default: "superAdmin",
    },
    fundRaising: {
      type: String,
    },
    responsibilities: {
      type: String,
    },
    level: {
      type: String,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
