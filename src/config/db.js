const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(
      process.env.DB_URL || "mongodb://localhost:27017/docker-node-mongo"
    )
    .then(() => console.log("Connected to MongoDB database!"))
    .catch((err) => console.error(err));
};

module.exports = connectDb;
