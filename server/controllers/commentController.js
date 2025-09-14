import mongoose from 'mongoose'
import { Comment } from '../models/comment.js'

export const getAllProductComments = async (req, res) => {
	try {
		const productId = req.params.id

		if (!mongoose.Types.ObjectId.isValid(productId)) {
			return res.status(400).json({ message: 'Incorrect product ID' })
		}

		const comments = await Comment.find({ productId }).sort({ createdAt: -1 })
		res.json(comments)
	} catch (error) {
		res.status(500).json({ message: error.message || 'Server error' })
	}
}

export const createComment = async (req, res) => {
	try {
		const { name, email, comment, rating, productId } = req.body

		if (!name || !email || !rating || !comment || !productId) {
			return res.status(400).json({ message: 'All fields are required' })
		}
		if (!mongoose.Types.ObjectId.isValid(productId)) {
			return res.status(400).json({ message: 'Incorrect product ID' })
		}

		const newComment = await Comment.create({
			productId,
			name,
			email,
			rating,
			comment,
		})
		res.status(201).json(newComment)
	} catch (error) {
		res.status(400).json({
			message: error || 'Server error',
		})
	}
}
export const getAverageRating = async (req, res) => {
	try {
		const productId = req.params.id

		if (!mongoose.Types.ObjectId.isValid(productId)) {
			return res.status(400).json({ message: 'Некорректный ID товара' })
		}

		const result = await Comment.aggregate([
			{ $match: { productId: new mongoose.Types.ObjectId(productId) } },
			{
				$group: {
					_id: '$productId',
					avgRating: { $avg: '$rating' },
					total: { $sum: 1 },
				},
			},
		])

		if (result.length === 0) {
			return res.json({ avgRating: 0, total: 0 })
		}

		const { avgRating, total } = result[0]
		res.json({ avgRating: parseFloat(avgRating.toFixed(1)), total })
	} catch (error) {
		res.status(500).json({ message: error.message || 'Server error' })
	}
}
