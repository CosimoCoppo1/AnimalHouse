const express = require('express')
const router  = express.Router()
const fs      = require('fs')
const Product = require('../models/product')
const Section = require('../models/section')
const Pet     = require('../models/pet')
const path    = require('path')
const {getProductById} = require('../controllers/productController')
const multer  = require('multer')
const upload = multer()
//{ dest: path.join(global.rootDir, 'public/images/products')}


router.get('/', async (req, res) => {
	
	try {
		let dbQuery = {};
		if ('section' in req.query) dbQuery['section'] = req.query.section;
		if ('id' in req.query) dbQuery['_id'] = req.query.id;
		if ('pet' in req.query) dbQuery['pet'] = req.query.pet;

		const products = await Product.find(dbQuery)
			.populate('pet')
			.populate('section')
			.lean();
		res.status(200).json(products);
	}
	catch (err) {
        res.status(400).json({message: err.message});
	}
	
});
	

/* crea un nuovo prodotto, 
 * NOTA: express cerca il primo route che fa match dall'alto verso il basso del file.
 * se POST /:id è poszionato prima di POST /new, quando si invia una POST /new new viene preso come ID */

router.post('/new', upload.single('product-image'), async (req, res) => {

    try {

		if (!('file' in req)) {
			throw new Error('File missing or wrong key name in multipart/form-data');
		}

		const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
		const new_file_name = uniquePrefix + '-' + req.file.originalname;

		const product = {
			'pet': req.body.pet,
			'section': req.body.section,
			'title': req.body.title,
			'price': req.body.price,
			'description': req.body.description,
			'image': 'http://' + path.join(global.baseUrl, '/images/products/', new_file_name),
			'alt': req.body.alt,
			'pieces_left': req.body.pieces_left
		};

    	const p = new Product(product);

		fs.writeFileSync(
			path.join(global.rootDir, 'public/images/products/', new_file_name), 
			req.file.buffer
		);

        await p.save();
        res.status(200).end();

    } catch(err) {

        res.status(400).json({message: err.message});
    }
})


router.post('/:id/modify', upload.single('product-image'), async (req, res) => {

    try {

		const old_product = await Product.find({ _id: req.params.id }).lean();

		if (old_product.length === 0) {
			throw new Error(`The product with id ${req.params.id} doesn't exist`)
		}

		if ('pet' in req.body) {
			const p = await Pet.find({ '_id': req.body.pet });
			if (p.length === 0) 
				throw new Error('"pet" is not a valid id for a pet');
		}
		if ('section' in req.body) {
			const s = await Section.find({ '_id': req.body.section, 'pet': req.body.pet });
			if (s.length === 0)
				throw new Error('"section" is not a valid id for a section');
		}

		if ('file' in req) {

			const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
			const new_file_name = uniquePrefix + '-' + req.file.originalname;

			req.body['image'] = 'http://' + path.join(global.baseUrl, '/images/products/', new_file_name);
			const imagePath = path.join(
				global.rootDir, 
				'public/images/products/', 
				path.basename(old_product[0].image)
			);

			if (fs.existsSync(imagePath)) {
				fs.unlinkSync(imagePath);
			}

			fs.writeFileSync(
				path.join(global.rootDir, 'public/images/products/', new_file_name), 
				req.file.buffer
			);
		}



		await Product.updateOne({ _id: req.params.id }, req.body);


		res.status(200).end();

    }   
    catch(err) {

        res.status(400).json({message: err.message})
    }   

})

//Delete one
router.delete('/:id', async (req, res) => {
    try{

        await Product.findByIdAndDelete(req.params.id);
		res.status(200).end();

    }catch(err) {

        res.status(400).json({message: err.message})
    }
})

router.post('/buy-from-cart', async (req, res) =>{

	try {
		const {cartItemsToBuy} = req.body
		let msg = []

		for (let item of cartItemsToBuy){
			let itemInDb = await Product.findById(item.product)		
			if(item.qty > itemInDb.pieces_left){
				msg.push(`Del prodotto ${item.title} sono disponibili ${itemInDb.pieces_left} pezzi \n`)
			}
		}

		if(msg.length == 0){
			for (let item of cartItemsToBuy){
				let itemInDb = await Product.findById(item.product)
				itemInDb.pieces_left -= item.qty
				await itemInDb.save()			
			}
		}


		if(msg.length == 0){
			msg.push("Prodotti acquistati con successo!")
			res.json({result: 0, msg})
		}else{
			msg.push("\n Perfavore, modificare il numero dei prodotti selezionati in base alle disponibilità. \n Grazie")
			res.json({result: 1, msg})
		}

	}catch(err) {
		res.status(400).json({message: err.message})
	}
})



router.get("/front/:id", getProductById)



module.exports = router
