const express = require("express");
const router = express.Router();

router.get("/signup", (req, res) => res.send("Welcome Signup Route"));

router.post("/signup", (req, res) => {
  console.log("Body", req.body);
  res.send(req.body);
});

router.get("/login", (req, res) => {
  res.send("Welcome Login Route");
});

module.exports = router;
