const Admin  = require('../models/admin')
const crypto = require('crypto')
const ErrorResponse = require("../utils/errorResponse")

exports.adminRegister = async (req, res, next) => {
    try {
        const admin = await Admin.create(
			{
            	'username': req.body.username, 
				'email': req.body.email, 
				'password': req.body.password
        });

        sendToken(admin, 200, res);

    }catch (error) {
        next(error);
    }
}

exports.adminLogin = async (req, res, next) => {
    const email = req.body.email;
	const password =  req.body.password;

    if (!email || !password) {
        return next(new ErrorResponse("Please provide an email and password", 400));
    }

    try {
        // si ottiene l'user dal db il campo unico 'email' e si popola il campo passw con 'select'
        const admin = await Admin.findOne({ 'email': email }).select("+password");

        if (!admin) {
            return next(new ErrorResponse("Invalid credentials", 401))
        }

        // si compara la passw dell'utente del db con quella ricevuta nel body della richiesta di login
        const isMatch = await admin.matchPasswords(password)

        if (!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401))
        }

        sendToken(admin, 200, res)
        
    } catch (err) {
		console.log(err);
        next(err)
    }        
}

const sendToken = (admin, statusCode, res) => {
    const token = admin.getSignedJwtToken();
    res.status(statusCode).json({ sucess: true, token });
};
