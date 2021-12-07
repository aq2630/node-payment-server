const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
