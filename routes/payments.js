const express = require("express");
const router = express.Router();
const { addPayment } = require("../controllers/payments");

router.post("/add", addPayment);

module.exports = router;
