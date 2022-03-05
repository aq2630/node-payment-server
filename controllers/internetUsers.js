const InternetUser = require("../models/internetUsers");

const addNewUser = async (req, res) => {
  const { userId, name, image, packageAmount, phone, autoEntry } = req.body;

  const newUser = new InternetUser({
    userId,
    name,
    image,
    packageAmount,
    phone,
    autoEntry,
  });

  // check is userId already exists
  const isUserExist = await InternetUser.findOne({ userId });
  if (isUserExist) {
    console.log("user Exist");
    return res.status(409).send("User Already Exist");
  }

  const createdUser = await newUser.save();
  return res.status(201).json(createdUser);
};

const showAllUsers = async (req, res) => {
  try {
    const users = await InternetUser.find({});
    return res.json(users);
  } catch (error) {
    return res.json({ message: error });
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    await InternetUser.deleteMany();
    return res.status(200).send("All Users Deleted");
  } catch (error) {
    return res.json({ message: error });
  }
};

const getUserpayments = async (req, res) => {
  try {
    const user = await InternetUser.findById(req.params.id);
    // populate all payments of single user
    const allPayments = await user.populate("payments");
    return res.status(200).json(allPayments);
  } catch (error) {
    return res.status(400).send("Payments Not Found");
  }
};

module.exports = { addNewUser, showAllUsers, getUserpayments, deleteAllUsers };
