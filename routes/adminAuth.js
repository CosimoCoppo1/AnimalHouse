const express = require('express');
const router = express.Router();

const {
    adminRegister, 
    adminLogin, 
} = require('../controllers/adminAuthController');

router.route("/register").post(adminRegister);
router.route("/login").post(adminLogin);

module.exports = router
