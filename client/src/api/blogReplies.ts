import axios from 'axios'
import type { BlogReplies } from '../types/blogReplies'

const API_BASE = import.meta.env.VITE_API_BASE

export const getBlogRepliesById = async (
	id: string
): Promise<BlogReplies[]> => {
	const res = await axios.get(`${API_BASE}/blogReplies/${id}`)
	return res.data
}

export const postBlogReply = async (data: {
	name: string
	email: string
	website?: string
	comment: string
	saveData?: boolean
	blogId?: string
}) => {
	const response = await axios.post(`${API_BASE}/blogReplies/create`, data, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return response.data
}
