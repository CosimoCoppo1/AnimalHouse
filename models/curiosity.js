const mongoose = require('mongoose')

const curiositySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
	età: {
		type: String,
		required: true
	},
	alimentazione: {
        type: String,
        required: true
    },
    habitat: {
        type: String,
		required: true
    }
})

module.exports = mongoose.model('Curiosity', curiositySchema)
