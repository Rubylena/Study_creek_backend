const mongoose = require("mongoose");
require("dotenv").config();
const URL = process.env.MONGO_DB_CONNECTION_URL;

const connectToMongoDb = () => {
  mongoose.connect(URL);

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  mongoose.connection.on("error", (err) => {
    console.log("An error occurred while connecting to MongoDB:", err);
  });
};

module.exports = connectToMongoDb;
