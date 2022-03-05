const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/connectDb.js");
const { autoPaymentEntry } = require("./utils/paymentEntry.js");
const userRuotes = require("./routes/user.js");
const internetUsersRuotes = require("./routes/internetUsers.js");
const paymentRoutes = require("./routes/payments.js");
require("dotenv").config();
const schedule = require("node-schedule");

const app = express();

connectDb();

app.use(cors());
app.use(express.json());

schedule.scheduleJob("0 17 22 5 * *", () => {
  console.log("running a task every month");
  autoPaymentEntry();
});

const PORT = process.env.PORT || 5000;

// Routes
app.use("/users", userRuotes);
app.use("/internetusers", internetUsersRuotes);
app.use("/payment", paymentRoutes);

app.get("/test", (req, res) => {
  res.sendStatus(200);
});

app.get("/heroku", (req, res) => {
  res.status(200).send("Heroku is working");
});

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
