import axios from 'axios'
const API_BASE = import.meta.env.VITE_API_BASE

export const loginUser = async (data: { email: string; password: string }) => {
	const res = await axios.post(`${API_BASE}/auth/login`, data, {
		withCredentials: true,
	})
	return res.data
}

export const registerUser = async (data: {
	username: string
	email: string
	password: string
}) => {
	const res = await axios.post(`${API_BASE}/auth/register`, data, {
		withCredentials: true,
	})
	return res.data
}

export const getMe = async () => {
	const res = await axios.get(`${API_BASE}/auth/me`, { withCredentials: true })
	return res.data
}

export const logout = async () => {
	await axios.post(`${API_BASE}/auth/logout`, {}, { withCredentials: true })
}
