import axios from 'axios'
import type { Blog } from '../types/blog'

const API_BASE = import.meta.env.VITE_API_BASE

export const getAllBlogs = async (
	page = 1,
	limit = 4
): Promise<{
	blogs: Blog[]
	currentPage: number
	totalPages: number
	totalItems: number
}> => {
	const res = await axios.get(`${API_BASE}/blog/all-post`, {
		params: { page, limit },
	})
	return res.data
}

export const getBlogById = async (id: string) => {
	const res = await axios.get(`${API_BASE}/blog/${id}`)
	return res.data
}
