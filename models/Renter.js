const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const RenterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
 
  salt: {
    type: String,
  },

  dni: {
    type: String,
    required: true,
    unique: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  profilePhoto: {
    type: String, //por ahora queda en string hasta que veamos que se necesitara
    
  },

  favorites: {
    type: Array, //por ahora queda en string hasta que veamos que se necesitara
  },

  country: {
    type: String,
    required: true,
    
  },

  payments: {
    type: String,//por ahora queda en string hasta que veamos que se necesitara
  
  },

  notifications: {
    type: Array,//por ahora queda en string hasta que veamos que se necesitara
    
  },

  chat:{
    type: String,
  },
  
  renterStatus: {
    type: Boolean,
    default: true,
  },
});


// Schema Hook => has de la password y creacion del salt del usuario
RenterSchema.pre("save", async function () {
    this.salt = bcrypt.genSaltSync();
    return (this.password = await bcrypt.hash(this.password, this.salt));
  });
  
  module.exports = mongoose.model("Renter", RenterSchema);