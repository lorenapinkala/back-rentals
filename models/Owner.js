const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const OwnerSchema = new mongoose.Schema({
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

  housePhoto: {
    type: Array, //por ahora queda en string hasta que veamos que se necesitara
  },

  description: {
    type: String,
    default: 'no description',
    
  },

  houseLocation:{
    type:String//por ahora queda como string
  },

  charge: {
    type: String,//por ahora queda en string hasta que veamos que se necesitara
  
  },

  chat:{
    type: String,
  },

  notifications: {
    type: Array,//por ahora queda en string hasta que veamos que se necesitara
    
  },
  
  ownerStatus: {
    type: Boolean,
    default: true,
  },
});


// Schema Hook => has de la password y creacion del salt del usuario
OwnerSchema.pre("save", async function () {
    this.salt = bcrypt.genSaltSync();
    return (this.password = await bcrypt.hash(this.password, this.salt));
  });
  
  module.exports = mongoose.model("Owner", OwnerSchema);