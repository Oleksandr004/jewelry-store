import express from 'express'
import connectDB from './config/connectDB.js'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()

import productsRouter from './routes/productsRoute.js'
import commentRouter from './routes/commentRoute.js'
import authRouter from './routes/authRoute.js'
import blogRouter from './routes/blogRoute.js'
import blogRepliesRouter from './routes/blogRepliesRoute.js'

const app = express()

app.use(express.json())

app.use(cookieParser())

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	})
)

app.use('/products', productsRouter)
app.use('/comments', commentRouter)
app.use('/auth', authRouter)
app.use('/blog', blogRouter)
app.use('/blogReplies', blogRepliesRouter)

connectDB().then(() => {
	app.listen(3000, () => console.log(`Server running on port 3000`))
})
