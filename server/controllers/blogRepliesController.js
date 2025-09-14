import mongoose from 'mongoose'
import { BlogReply } from '../models/blogReply.js'

export const getRepliesById = async (req, res) => {
	try {
		const blogId = req.params.id

		if (!mongoose.Types.ObjectId.isValid(blogId)) {
			return res.status(400).json({ message: 'Incorrect ID' })
		}
		const blogReplies = await BlogReply.find({ blogId }).sort({ createdAt: -1 })

		res.json(blogReplies)
	} catch (error) {
		res.status(500).json({ message: error.message || 'Server error' })
	}
}

export const createBlogReply = async (req, res) => {
	try {
		const { blogId, name, email, website = '', comment } = req.body
		if (!blogId || !name || !email || !comment) {
			return res.status(400).json({ message: 'All fields are required' })
		}
		if (!mongoose.Types.ObjectId.isValid(blogId)) {
			return res.status(400).json({ message: 'Incorrect blog ID' })
		}
		const newBlogReply = await BlogReply.create({
			blogId,
			name,
			email,
			website,
			comment,
		})

		res.status(201).json(newBlogReply)
	} catch (error) {
		res.status(400).json({
			message: error.message || 'Server Error',
		})
	}
}
