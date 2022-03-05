const mongoose = require("mongoose");

const internetUserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    packageAmount: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    autoEntry: {
      type: Boolean,
      required: true,
    },
    payments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Payment" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("InternetUser", internetUserSchema);
