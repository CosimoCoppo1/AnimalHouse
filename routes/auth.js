const express = require('express')
const router = express.Router()

const {
    register, 
    adminRegister, 
    login,
    adminLogin
} = require('../controllers/authController')

router.route("/register").post(register)
router.route("/adminRegister").post(adminRegister)
router.route("/login").post(login)
router.route("/adminLogin").post(adminLogin)

module.exports = router
