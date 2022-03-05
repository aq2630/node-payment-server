const express = require("express");
const router = express.Router();
const {
  addNewUser,
  showAllUsers,
  getUserpayments,
  deleteAllUsers,
} = require("../controllers/internetUsers");

router.post("/add", addNewUser);
router.get("/getpayments/:id", getUserpayments);
router.get("/all", showAllUsers);
router.get("/deleteall", deleteAllUsers);

module.exports = router;
