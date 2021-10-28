import dataStructure from '../models/product.js';

export const getAll = async (req, res) => {
	try {
		const allTask = await dataStructure.find();
		res.status(200).json(allTask);
	} catch (error) {
		res.status(500).json({ msg: `Internal error ${error}` });
	}
};

export const createPost = async (req, res) => {
	try {
		const newTask = dataStructure.create(req.body);
		res.status(201).json(newTask);
	} catch (error) {
		res.status(500).json({ msg: `Internal error ${error}` });
	}
};

export const getSingle = async (req, res) => {
	try {
		const { id } = req.params;
		const fetchPost = await dataStructure.findById(id);
		res.status(200).json(fetchPost);
	} catch (error) {
		res.status(500).json({ msg: `Internal error ${error}` });
	}
};

export const deletePost = async (req, res) => {
	try {
		const { id } = req.params;
		const delTask = await dataStructure.findByIdAndRemove(id);
		res.status(200).json(delTask);
	} catch (error) {
		res.status(500).json({ msg: `Internal error ${error}` });
	}
};

export const updatePost = async (req, res) => {
	try {
		const { id } = req.params;
		const patchTask = await dataStructure.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(201).json(patchTask);
	} catch (error) {
		res.status(500).json({ msg: `Internal error ${error}` });
	}
};
