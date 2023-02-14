const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const AdmSchema = new mongoose.Schema({
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

  renters: {
    type: Array, //por ahora queda en arr hasta que veamos que se necesitara
    
  },

  owners: {
    type: Array, //por ahora queda en arr hasta que veamos que se necesitara
  },
  
  admStatus: {
    type: Boolean,
    default: true,
  },
});


// Schema Hook => has de la password y creacion del salt del usuario
AdmSchema.pre("save", async function () {
    this.salt = bcrypt.genSaltSync();
    return (this.password = await bcrypt.hash(this.password, this.salt));
  });
  
  module.exports = mongoose.model("Adm", AdmSchema);