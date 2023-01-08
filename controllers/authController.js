const User = require('../models/user')
const ErrorResponse = require("../utils/errorResponse")

exports.register = async (req, res, next) => {
    const {username, email, password} = req.body

    try{
        const user = await User.create({
            username, email, password
        })

        sendToken(user, 200, res)

    }catch (error){
        next(error)
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


const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    const username = user.username
    const userId = user._id
    res.status(statusCode).json({ sucess: true, token, username, userId });
};