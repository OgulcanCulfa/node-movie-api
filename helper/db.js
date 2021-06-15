const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME,
  });
  mongoose.connection.on("open", () => {
    console.log("MongoDB: Connected");
  });

  mongoose.connection.on("error", (err) => {
    console.log("MongoDB: Error", err);
  });

  mongoose.Promise = global.Promise;
};
