const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    'qty': {
        type: Number,
        required: true
    },
    'user_id': {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
        required: true
    },
	'service_id': {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'bookable_service',
		required: true
	}    
},
{ timestamps: true }
)

module.exports = mongoose.model('Reservation', reservationSchema)