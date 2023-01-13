const express = require('express')
const router  = express.Router()
const Question = require('../models/question')

router.get('/', async (req, res) => {
	
	try {
		let dbQuery = {};
		let qty = 10;
		if ('category' in req.query) dbQuery['category'] = req.query.category;
		if ('qty' in req.query) qty = req.query.qty;

		const questions = await Question.find(dbQuery).limit(qty).lean();
		res.status(200).json(questions);
	}
	catch (err) {
        res.status(404).json({message: err.message});
	}
	
});
	
module.exports = router
