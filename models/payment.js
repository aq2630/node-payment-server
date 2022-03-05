const mongoose = require("mongoose");

const addPayment = new mongoose.Schema(
  {
    amount: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", addPayment);
