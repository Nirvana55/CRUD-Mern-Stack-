import express from 'express';
import {
	getAll,
	createPost,
	getSingle,
	deletePost,
	updatePost,
} from '../controllers/products.js';

const router = express.Router();

router.route('/').get(getAll).post(createPost);
router.route('/:id').get(getSingle).delete(deletePost).patch(updatePost);

export default router;
