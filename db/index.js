const mongoose = require("mongoose");
//require("dotenv").config();

const client = mongoose
  .connect('mongodb+srv://topland:mongodb@cluster0.7rvolyd.mongodb.net/test')
  .then(() => console.log("Succesfully db connected"))
  .catch((err) => console.error(err));

module.exports = client;