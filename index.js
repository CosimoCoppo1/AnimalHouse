const express  = require('express')
const app      = express()
const mongoose = require('mongoose')
const config   = require('./config/database')
const cors     = require('cors')
const path     = require('path')
const fs       = require('fs')

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
app.use('/images', express.static('images'));
app.use('/posts', require('./routes/PostRoute.js'))
app.use('/upload', require('./routes/UploadRoute.js'))
app.use(errorHandler)


const dbRefill = require('./dbImage/dbRefill.js');
app.listen(8000, async () => {
	console.log('Server Started\n')

	await mongoose.connect(config.database)
	await dbRefill.dbPopulate();

	const postDir = path.join(global.rootDir, 'public/images/post');
	fs.readdirSync(postDir)
	.forEach(file => {
		const file_path = path.join(postDir, file);
		const file_stats = fs.statSync(file_path);
		if (file_stats.isFile()) {
			fs.unlinkSync(file_path);
		}
	});

	const productDir = path.join(global.rootDir, 'public/images/ecommerce/products');
	fs.readdirSync(productDir)
	.forEach(file => {
		const file_path = path.join(productDir, file);
		const file_stats = fs.statSync(file_path);
		if (file_stats.isFile()) {
			fs.unlinkSync(file_path);
		}
	});
	
});
