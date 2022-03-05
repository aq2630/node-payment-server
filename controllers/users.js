const User = require("../models/user");

const login = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const { phone, password } = req.body;

  const user = await User.findOne({ phone });

  if (user && user.password === password) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }

  console.log("User ", user);
  //   user.payments.push(paymentTransaction);
  //   const savedUser = await user.save();
};

const register = async (req, res) => {
  const { phone, password } = req.body;

  const newUser = new User({
    phone,
    password,
  });

  // check is userId already exists
  const isUserExist = await User.findOne({ phone });
  if (isUserExist) {
    return res.status(400).send("User already exists");
  }

  const createdUser = await newUser.save();
  res.status(201).json(createdUser);
};

module.exports = { login, register };
