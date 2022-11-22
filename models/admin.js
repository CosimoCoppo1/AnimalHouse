const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const jwt      = require("jsonwebtoken");
const config   = require('../config/database')

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide username"],
    },
    email: {
        type: String,
        required: [true, "Please provide email address"],
        unique: true,
		/* commento su cosa cerca la regex
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please provide a valid email",
        ]
		*/
    },
    password: {
    	type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        select: false
		//il campo password non viene selezionato con una Admin.find
    }
});

/* pre saving function.
 * La funzione passata come parametro viene eseguita prima del
 * salvataggio, save() function, dell'utente admin sul database. */

adminSchema.pre("save", async function(next) {

/* se il campo 'password' è stato modificato viene ricalcolato l'hash
 * 'this' si riferice al document che sta per essere aggiornato */

  if(!this.isModified("password")) {    
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


/* Aggiungo un medoto utilizzabile su un singolo documento 
 * instanza del model userSchema */

adminSchema.methods.matchPasswords = async function (password) { 
  /* this si riferisce al document su cui è chiamato il metodo */
  return await bcrypt.compare(password, this.password);         
};

/* Firmo l'oggetto { id: this._id } con la password JWT_SECRET */
adminSchema.methods.getSignedJwtToken = function () {
	return jwt.sign(
  		{ id: this._id }, 
		config.JWT_SECRET, 
		{ expiresIn: config.JWT_EXPIRE }
	);
};

/*
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // 10 min

  return resetToken;
};

*/
module.exports = mongoose.model('admin', adminSchema);
