const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
	answers: {
		type: [String],
		required: true
	},
	correctAnswer: {
        type: Number,
		enum: [0, 1, 2, 3],
        required: true
    },
    comment: {
        type: String
    },
	img: {
        type: String,
		required: true
    }
})

module.exports = mongoose.model('Question', questionSchema)
