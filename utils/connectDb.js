const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connectMongo = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongo Db is Connected ${connectMongo.connection.host}`);
  } catch (error) {
    console.log("Error", error.message);
  }
};

module.exports = connectDb;
