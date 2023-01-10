const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    'qty': {
        type: Number,
        required: true
    },
    'user': {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
        required: true
    },
	'bookable_service': {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Bookable_service',
		required: true
	}    
},
{ timestamps: true }
)

module.exports = mongoose.model('Reservation', reservationSchema)