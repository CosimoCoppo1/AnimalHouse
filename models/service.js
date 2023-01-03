const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true
    },
    'pet': {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'pet',
        required: true
    },
	'description': {
		type: String,
		required: true
	},
    'image': {
        type: String,
        required: true
    }
});

serviceSchema.index({ name: 1, pet: 1 }, { unique: true });

module.exports = mongoose.model('service', serviceSchema)
