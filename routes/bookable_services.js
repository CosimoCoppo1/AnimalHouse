const express  = require('express')
const router   = express.Router()
const Pet      = require('../models/pet')
const Location = require('../models/location')
const Service  = require('../models/service')
const Bookable_service = require('../models/bookable_service')
const Reservation = require('../models/reservation')


router.get('/', async (req, res) => {

    try {
		let dbQuery = {}

		if ('pet' in req.query) {
			dbQuery['pet'] = req.query.pet;
		}
		if ('location' in req.query) {
			dbQuery['location'] = req.query.location;
		}
		if ('service' in req.query) {
			dbQuery['service'] = req.query.service;
		}

        const s  = await Bookable_service.find(dbQuery)
			.populate('pet')
			.populate('location')
			.populate('service')
			.lean();

		
		s.sort((x, y) => {

			let cmp;

			cmp = x.pet.name.localeCompare(y.pet.name);
			if (cmp !== 0)  return cmp;

			cmp = `${x.location.city} - ${x.location.address}`
				.localeCompare(`${y.location.city} - ${y.location.address}`);
			if (cmp !== 0)  return cmp; 

			cmp = x.service.name.localeCompare(y.service.name);
			if (cmp !== 0)  return cmp;
  
			cmp = x.day.toString().localeCompare(y.day);
			if (cmp !== 0)  return cmp;

			if (x.price > y.price) return 1;

			else return 0;

		});


		res.status(200).json(s);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
});

router.get('/to-book/:id', async (req, res) => {
	try {

		const services  = await Bookable_service.find({'location': req.params.id})
			.populate('pet')
			.populate('location')
			.populate('service')
			.lean();

		if(services == null)
            return res.status(404).json({message: 'Cannot find services by id'})  

		res.status(200).json(services);
	}
	catch (err) {
		res.status(400).json({message: err.message});
	}    
});
	

router.post('/new', async (req, res) => {

		if ('pet' in req.body) {
			const p = await Pet.findById(req.body.pet);
			if (p.length === 0) 
				throw new Error('"pet" is not a valid id for a pet');
		}
		if ('location' in req.body) {
			const l = await Location.findById(req.body.location);
			if (l.length === 0) 
				throw new Error('"location" is not a valid id for a location');
		}
		if ('service' in req.body) {
			const s = await Service.find({ '_id': req.body.service, 'pet': req.body.pet });
			if (s.length === 0)
				throw new Error('"service" is not a valid id for a service');
		}
	
	try {
		const bs = new Bookable_service(req.body);
		await bs.save();
		res.status(200).end();
	}
	catch (err) {
		res.status(400).json({ 'message': err.message });
	}
});


router.post('/:id/modify', async (req, res) => {
	try {
		if ('pet' in req.body) {
			const p = await Pet.findById(req.body.pet);
			if (p.length === 0) 
				throw new Error('"pet" is not a valid id for a pet');
		}
		if ('location' in req.body) {
			const l = await Location.findById(req.body.location);
			if (l.length === 0) 
				throw new Error('"location" is not a valid id for a location');
		}
		if ('service' in req.body) {
			const s = await Service.find({ '_id': req.body.service, 'pet': req.body.pet });
			if (s.length === 0)
				throw new Error('"service" is not a valid id for a service');
		}

		await Bookable_service.updateOne({ _id: req.params.id }, req.body);

		res.status(200).end();
	}
	catch (err) {
		res.status(400).json({ 'message': err.message });
	}
});

router.delete('/:id/', async (req, res) => {
	
	try {
		await Bookable_service.deleteOne({ _id: req.params.id });
		res.status(200).end();
	}
	catch (err) {
		res.status(400).json({ 'message': err.message });
	}
});

router.post('/reservation', async (req, res) => {
	let reservationResult = false
	let serviceR = {}

    try {		

		if (!('bookable_service' in req.body)) {
			throw new Error('"bookable_service" field is required in body request');
		}

		const serviceToBook = await Bookable_service.findById(req.body.bookable_service);

		if (serviceToBook === null) {
			throw new Error(`A bookable_service with id: ${req.body.bookable_service} not exist`);
		}
		
		if(serviceToBook.reservation_left >= req.body.qty) {

			serviceR = new Reservation(req.body);
			await serviceR.save();		
			
			serviceToBook.reservation_left -= req.body.qty;
			await serviceToBook.save();
			
			reservationResult = true;

			res.json({reservationResult, serviceR});

		} 
		else {
			res.json({reservationResult, serviceR});
		}

    } 
	catch (err){
        res.status(400).json({ 'message': err.message });
    }

});

router.get('/reservation', async (req, res) => {
	

	let bookable_dbQuery = {}
	let reservation_dbQuery = {}

	if ('pet' in req.query) {
		bookable_dbQuery['pet'] = req.query.pet;
	}
	if ('location' in req.query) {
		bookable_dbQuery['location'] = req.query.location;
	}
	if ('service' in req.query) {
		bookable_dbQuery['service'] = req.query.service;
	}

	try {

		if ('pet' in req.query || 'location' in req.query || 'service' in req.query) {

			const bs  = await Bookable_service.find(bookable_dbQuery).lean();
			let bs_ids = [];

			for (let i = 0; i < bs.length; i++) {
				bs_ids.push(bs[i]._id);
			}

			reservation_dbQuery['bookable_service'] = { $in: bs_ids };
		}

		if ('user' in req.query) {
			reservation_dbQuery['user'] = req.query.user;
		}


		const recerveces = await Reservation.find(reservation_dbQuery)
			.populate({
				path: 'bookable_service',
				populate: [
				{
					path: 'service',
					model: 'service'
				}, 
				{
					path: 'location',
					model: 'location'
				},
				{
					path: 'pet',
					model: 'pet'
				}
				]
			})
			.lean();

		recerveces.sort((x, y) => {

			let cmp;
			x = x.bookable_service;
			y = y.bookable_service;

			cmp = x.pet.name.localeCompare(y.pet.name);
			if (cmp !== 0)  return cmp;

			cmp = `${x.location.city} - ${x.location.address}`
				.localeCompare(`${y.location.city} - ${y.location.address}`);
			if (cmp !== 0)  return cmp; 

			cmp = x.service.name.localeCompare(y.service.name);
			if (cmp !== 0)  return cmp;
  
			cmp = x.day.toString().localeCompare(y.day);
			if (cmp !== 0)  return cmp;

			if (x.price > y.price) return 1;

			else return 0;

		});

			
		res.json(recerveces)

	}
	catch(err) {
		res.status(400).json({ 'message': err.message });
	}   
})

module.exports = router
