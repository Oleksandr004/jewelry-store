import { User } from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
	console.log('REQ BODY:', req.body)
	try {
		const { username, email, password } = req.body
		const existingUser = await User.findOne({ $or: [{ username }, { email }] })
		if (existingUser) {
			return res.status(400).json({
				message: 'Пользователь с таким username или email уже существует',
			})
		}
		const hashedPassword = await bcrypt.hash(password, 5)

		const user = await User.create({
			username,
			email,
			password: hashedPassword,
		})

		res.status(201).json({ message: 'Регистрация успешная', user })
	} catch (error) {
		console.error('Register error:', error)
		res.status(400).json({
			message: 'Register Erorr',
			error: error.message,
			body: req.body,
		})
	}
}

export const login = async (req, res) => {
	try {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if (!user) {
			return res.status(400).json({
				message: 'User not found',
			})
		}

		const isPassCorrect = await bcrypt.compare(password, user.password)

		if (!isPassCorrect) {
			return res.status(400).json({
				message: 'Wrong password',
			})
		}

		const token = jwt.sign(
			{
				id: user._id,
				email: user.email,
				role: user.role,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: process.env.JWT_TOKEN_IN,
			}
		)
		res
			.cookie('token', token, {
				httpOnly: true, // нельзя прочитать через JS
				// secure: process.env.NODE_ENV === 'production', // только HTTPS на продакшене,
				secure: false,
				sameSite: 'lax', // защита от CSRF
				maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
			})
			.status(200)
			.json({
				message: 'Login successful',
				user: { email: user.email, username: user.username },
			})
	} catch (error) {
		console.error('Login error:', error)
		return res.status(500).json({
			message: 'Login error',
			error: error.message,
		})
	}
}

export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.user?.id).select('-password')
		if (!user) {
			return res.status(404).json({ message: 'User not found' })
		}
		res.json({ user })
	} catch (err) {
		res.status(500).json({ message: 'Server error' })
	}
}
export const logout = (req, res) => {
	res
		.cookie('token', '', { httpOnly: true, maxAge: 0 })
		.status(200)
		.json({ message: 'Logged out' })
}
