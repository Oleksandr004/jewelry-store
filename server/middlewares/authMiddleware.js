import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
	console.log('COOKIE TOKEN:', req.cookies.token)
	try {
		const token = req.cookies.token
		if (!token) return res.status(401).json({ message: 'Not authorized' })

		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.user = decoded
		next()
	} catch (error) {
		return res.status(401).json({ message: 'Invalid token' })
	}
}
