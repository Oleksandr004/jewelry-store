import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		imgUrl: {
			type: String,
			required: false,
			default: '',
		},
		postText: {
			type: String,
			required: true,
		},
		createdAt: { type: Date, default: Date.now },
		tag: { type: String, required: true, trim: true },
	},
	{ timestamps: true }
)

export const Blog = mongoose.model('Blog', blogSchema)
