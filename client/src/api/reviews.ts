import axios from 'axios'
import type { Review } from '../types/review'

export type ReviewData = {
	name: string
	email: string
	comment: string
	rating: number
	productId: string
}

const API_BASE = import.meta.env.VITE_API_BASE

export const GetReviewsById = async (id: string): Promise<Review[]> => {
	const res = await axios.get(`${API_BASE}/comments/${id}`)
	return res.data
}
export const SubmitReview = async (data: ReviewData) => {
	const res = await axios.post(`${API_BASE}/comments`, data)
	return res.data
}
