const express = require('express')
const router  = express.Router()
const Score   = require('../models/gamescore')

router.get('/game/:game', async (req, res) => {
	
	try {
		let dbQuery = {};
		let top = 10;

		const scores = await Score.aggregate([
			{ $match: { game: req.params.game  } },
			{ $sort: { bestScore: -1 } },
			{ $limit: top }
		]);
		res.status(200).json(scores);
	}
	catch (err) {
        res.status(404).json({message: err.message});
	}
	
});


router.get('/user/:userId', async (req, res) => {
	
	try {
		let dbQuery = {};
		let top = 10;

		if ('game' in req.query) dbQuery['game'] = req.query.game;
		dbQuery['user'] = req.params.userId;

		const scores = await Score.find(dbQuery).lean();
		res.status(200).json(scores);
	}
	catch (err) {
        res.status(404).json({message: err.message});
	}
	
});
	

router.post('/updateOrCreate', async (req, res) => {

    try {

		if (!('game' in req.body) ||
			!('user' in req.body) ||
			!('bestScore' in req.body)) {

			throw new Error('missing at least one field in body request');
		}

		const filter = {
			'user': req.body.user,
			'game': req.body.game
		};

		let scores = await Score.find(filter);
		
		if (scores.length > 0) {
			if (req.body.bestScore > scores[0].bestScore) {
				scores[0].bestScore = req.body.bestScore;
				await scores[0].save();
			}
		}
		else {
			const newScore = new Score({
				'user': req.body.user,
				'game': req.body.game,
				'bestScore': req.body.bestScore
			});

			await newScore.save();
				
		}

        res.status(200).end();

    } catch(err) {

        res.status(404).json({message: err.message});
    }
})


module.exports = router
