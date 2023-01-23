const mongoose = require('mongoose')

const sectionSchema = new mongoose.Schema({
    pet: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'pet',
        required: true
    },
    name: {
        type: String,
        required: true
    },
	img: {
		type: String,
		required: true
	},	
	description: {
		type: String,
		required: true
	}
});

sectionSchema.index({ pet: 1, name: 1 }, { unique: true });

module.exports = mongoose.model('section', sectionSchema)

/*
alt: {
		type: String,
		required: true
	},
*/
