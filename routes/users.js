const express = require('express')
const router  = express.Router()
const User    = require('../models/user')
const UserPet = require('../models/userPet')
const Score   = require('../models/gamescore')
const Post    = require('../models/postModel')
const Reservation = require('../models/reservation')

router.post('/:id/modify', async (req, res) => {
	try {
		await User.updateOne({ _id: req.params.id }, req.body);
		res.status(200).end();
    }   
    catch(err) {
        res.status(400).json({message: err.message})
    }
});

router.delete('/:id', async (req, res) => {
	try {
		const id = req.params.id;
        await User.findByIdAndDelete(id);

        await Score.deleteMany({ 'user': id });
        await Post.deleteMany({ 'user': id });
        await Reservation.deleteMany({ 'user': id });
        await UserPet.deleteMany({ 'user': id });


		res.status(200).end();
	}
	catch (err) {
        res.status(400).json({message: err.message});
	}
});


router.get('/', async (req, res) => {

    try {
		let dbQuery = { 'role': 'normal' };
		if ('id' in req.query) dbQuery['_id'] = req.query.id;
		if ('email' in req.query) dbQuery['email'] = req.query.email;
		if ('username' in req.query) {
			dbQuery['username'] = { $regex: new RegExp(req.query.username), $options: 'i' };
		}

        const userList = await User.find(dbQuery).lean();
		/* La password non viene restiuta da mongo,
		 * vedi select: false in models/user.js */

		res.status(200).json(userList);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
});


module.exports = router
