const express  = require('express')
const router   = express.Router()
const Section  = require('../models/section')
const Pet    = require('../models/pet')

router.get('/', async (req, res) => {

	try {
		let dbQuery = {};
		if ('pet' in req.query) {
			dbQuery['pet'] = req.query.pet;
		}
		if ('name' in req.query) {
			let petS = await Pet.find({name: req.query.name})
			if(petS.length > 0){
				dbQuery['pet'] = petS[0]._id
			}
		}		
		const sections = await Section.find(dbQuery).lean();
		res.status(200).json(sections);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
})

module.exports = router
