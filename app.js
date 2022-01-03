const express = require("express");
const connectDb = require("./utils/connectDb.js");
const userRuotes = require("./routes/user.js");
require("dotenv").config();

const app = express();

connectDb();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.use("/users", userRuotes);

app.get("/test", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
