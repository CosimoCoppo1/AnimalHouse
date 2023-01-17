const express  = require('express')
const app      = express()
const mongoose = require('mongoose')
const config   = require('./config/database')
const cors     = require('cors')
const path     = require('path')

const errorHandler = require('./middleware/error')


global.rootDir = __dirname
global.baseUrl = 'localhost:8000/'

app.use(express.static(path.join(global.rootDir, 'public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors())



app.use('/products', require('./routes/products'))
app.use('/pets', require('./routes/pets'))
app.use('/locations', require('./routes/locations'))
app.use('/services', require('./routes/services'))
app.use('/sections', require('./routes/sections'))
app.use('/users', require('./routes/users'))
app.use('/bookable_services', require('./routes/bookable_services'))
app.use('/questions', require('./routes/questions'))
app.use('/scores', require('./routes/scores'))
app.use('/userPet', require('./routes/userPets'))
app.use('/backoffice/services', require('./tpl-script/backoffice-service'))
app.use('/backoffice/ecommerce', require('./tpl-script/backoffice-ecommerce'))


app.use('/auth/user/', require('./routes/auth'))
app.use('/auth/admin/', require('./routes/adminAuth'))
app.use('/images', express.static('images'));
app.use('/posts', require('./routes/PostRoute.js'))
app.use('/upload', require('./routes/UploadRoute.js'))
app.use(errorHandler)


// set static folder
app.use(express.static('FrontOffice/build'))
//load index.html file in modo che ogni richiesta ricevuta sia gestita da index.html
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'FrontOffice', 'build', 'index.html'))
})

//app.use(express.static(path.join(global.rootDir, 'game/dist')))


const dbRefill = require('./dbImage/dbRefill.js');
app.listen(8000, async () => {
	console.log('Server Started\n')

	await mongoose.connect(config.database)
	await dbRefill.dbPopulate();

	/*
	const pets = await Pet.find({}).lean();	
	const sections = await Section.find({}).lean();	
	const products = await Product.find({}).lean();	

	console.log('pets', pets);
	console.log('sections', sections);
	console.log('products', products);
	*/

	/*
	const locations = await Location.find({}).lean();	
	const services = await Service.find({}).lean();	
	const bookable_services = await Bookable.find({}).lean();	

	console.log('locations', locations);
	console.log('services', services);
	console.log('bookable_services', bookable_services);
	*/

});
