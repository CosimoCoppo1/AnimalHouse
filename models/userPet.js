const mongoose = require('mongoose')

const userPetSchema = mongoose.Schema(
	{
		'user': { 
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		'pet': { 
			type: mongoose.Schema.Types.ObjectId,
			ref: 'pet',
			required: true
		},
		'petName': {
			type: String, 
			required : true
		},
		'desc': {
			type: String
		}
	} 
);

module.exports = mongoose.model('userPet', userPetSchema)

