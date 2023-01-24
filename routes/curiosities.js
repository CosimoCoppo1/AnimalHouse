const express = require('express')
const router  = express.Router()
const Curiosity = require('../models/curiosity')

router.get('/', async (req, res) => {
	
	try {
		let dbQuery = {};
		let qty = 10;
		if ('name' in req.query) dbQuery['name'] = req.query.name;
		if ('qty' in req.query) qty = parseInt(req.query.qty);

		const curiosities = await Curiosity.aggregate([
			{ $match: dbQuery },
			{ $sample: { size: qty } }
		]);

		res.status(200).json(curiosities);
	}
	catch (err) {
        res.status(400).json({message: err.message});
	}
	
});
	
module.exports = router
