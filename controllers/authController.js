const User = require('../models/user')
const ErrorResponse = require("../utils/errorResponse")

exports.register = async (req, res, next) => {
    const {username, email, password} = req.body

    try{
        const user = await User.create({
            username, email, password, 'role': 'normal'
        })

        sendToken(user, 200, res)

    }catch (error){
        next(error)
    }
}

exports.adminRegister = async (req, res, next) => {
    try {
        const admin = await User.create(
			{
            	'username': req.body.username, 
				'email': req.body.email, 
				'password': req.body.password,
				'role': 'admin'
        	}
		);

        sendToken(admin, 200, res);

    }catch (error) {
        next(error);
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorResponse("Please provide an email and password", 400))
    }

    try {
        // si ottiene l'user dal db il campo unico 'email' e si popola il campo passw con 'select'
        const user = await User.findOne({ email }).select("+password") 

        if (!user) {
            return next(new ErrorResponse("Invalid credentials", 401))
        }

        // si compara la passw dell'utente del db con quella ricevuta nel body della richiesta di login
        const isMatch = await user.matchPasswords(password)

        if (!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401))
        }

        sendToken(user, 200, res)
        
    } catch (err) {
        next(err)
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
        const admin = await User.findOne({ 'email': email, 'role': 'admin' }).select("+password");

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

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    const username = user.username
	const email = user.email
    const role = user.role
    const userId = user._id
    res.status(statusCode).json({ 
		sucess: true, 
		token, 
		username, 
		email,
		role,
		userId 
	});
};
