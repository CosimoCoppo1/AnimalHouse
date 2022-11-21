const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
	{
		/*
		userId: { 
			type: String, 
			required: true 
		},
		*/

		'desc': {
			type: String, 
			required : true
		},
		'image': {
			type: String
		},
	}, 
	{ timestamps: true });

/* timestamps: true, crea due campi 'createAt' e 'updateAt'
 * 'createAt' viene inizializzato con la data della creazione del post e rimane immutato
 * 'updateAt' viene inizializzato con la data di creazione del post e aggiornato
 * automaticamente da mongo ad ogni aggioranemto al post */


module.exports = mongoose.model("Posts", postSchema)

