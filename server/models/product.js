import mongoose from 'mongoose';

const dataScheme = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please Provide name'],
		trim: true,
		maxlength: [20, 'Please provide text less than 20'],
	},
	age: {
		type: Number,
		required: [true, 'Please Provide detail'],
	},
	address: {
		type: String,
		required: [true, 'Please Provide address'],
	},
});

const dataStructure = mongoose.model('Store-API', dataScheme);

export default dataStructure;
