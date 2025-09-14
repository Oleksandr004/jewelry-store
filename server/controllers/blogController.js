import { Blog } from '../models/blog.js'
import { BlogReply } from '../models/blogReply.js'
import mongoose from 'mongoose'

export const GetAllBlogs = async (req, res) => {
	try {
		const page = parseInt(req.query.page) || 1
		const limit = parseInt(req.query.limit) || 4
		const skip = (page - 1) * limit

		const blogs = await Blog.find().skip(skip).limit(limit)
		const total = await Blog.countDocuments()

		res.status(200).json({
			blogs,
			currentPage: page,
			totalPages: Math.ceil(total / limit),
			totalItems: total,
		})
	} catch (error) {
		res.status(400).json({
			message: error,
		})
	}
}

export const getBlogById = async (req, res) => {
	try {
		const { id } = req.params
		const blog = await Blog.findById(id)
		if (!blog)
			return res.status(404).json({
				message: 'Post not found',
			})
		res.status(200).json({
			blog,
		})
	} catch (error) {
		res.status(400).json({
			message: error.message || 'Server Error',
		})
	}
}
