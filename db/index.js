const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require("dotenv").config();

const client = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Succesfully db connected"))
  .catch((err) => console.error(err));

module.exports = client;