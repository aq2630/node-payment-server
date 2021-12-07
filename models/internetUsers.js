const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
