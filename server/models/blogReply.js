import mongoose from 'mongoose'

const blogReplySchema = new mongoose.Schema(
	{
		blogId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Blog',
			required: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
		},
		website: {
			type: String,
			default: '',
			trim: true,
		},
		comment: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{ timestamps: true }
)

export const BlogReply = mongoose.model('blogReply', blogReplySchema)
