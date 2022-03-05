const Payment = require("../models/payment");
const InternetUser = require("../models/internetUsers");

const addPayment = async (req, res) => {
  const { amount, userId } = req.body;

  const newPayment = new Payment({
    amount,
    userId,
  });

  const user = await InternetUser.findOne({ userId });
  if (!user) return res.status(404).send("User Not Found");

  const paymentTransaction = await newPayment.save();
  // add user id to payments array
  user.payments.push(paymentTransaction);
  const savedUser = await user.save();
  return res.status(201).json(savedUser);
};

module.exports = { addPayment };
