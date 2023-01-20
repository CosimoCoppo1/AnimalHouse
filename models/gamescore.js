const mongoose = require('mongoose')
const User     = require('./user')

const scoreSchema = new mongoose.Schema({
    game: { 
        type: String, 
        required: true
    },
    bestScore: {
        type: Number,
        required: true
    },
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
},
{ timestamps: true }
)

scoreSchema.index({ user: 1, game: 1 }, { unique: true });

module.exports =  mongoose.model('Score', scoreSchema);
