const Payment = require("../models/payment");
const InternetUser = require("../models/internetUsers");

const autoPaymentEntry = async () => {
  const allUsers = await InternetUser.find({ autoEntry: true });
  console.log(allUsers);

  if (allUsers.length === 0) {
    return;
  }

  allUsers.forEach(async (user) => {
    const newPayment = new Payment({
      amount: 0,
      userId: user._id,
    });
    const paymentTransaction = await newPayment.save();
    user.payments.push(paymentTransaction);
    await user.save();
  });
};

module.exports = { autoPaymentEntry };
