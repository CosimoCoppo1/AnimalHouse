const express = require('express')
const router  = express.Router()
const UserPet = require('../models/userPet')


router.get('/user/:userId', async (req, res) => {
	
	try {

		const pets = await UserPet.find({ 'user': req.params.userId })
			.populate('pet')
			.lean();
		res.status(200).json(pets);
	}
	catch (err) {
        res.status(404).json({message: err.message});
	}
	
});
	

router.post('/register', async (req, res) => {

    try {

		const newUserPet = new UserPet(req.body);
		await newUserPet.save();

        res.status(200).end();

    } catch(err) {

        res.status(404).json({message: err.message});
    }
})


module.exports = router
