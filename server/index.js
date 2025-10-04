import express from 'express';
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import compression from 'compression';
import productsRouter from './routes/productsRoute.js';
import commentRouter from './routes/commentRoute.js';
import authRouter from './routes/authRoute.js';
import blogRouter from './routes/blogRoute.js';
import blogRepliesRouter from './routes/blogRepliesRoute.js';

dotenv.config();

const app = express();

connectDB().then(() => console.log('MongoDB connected'));

// --- Основной middleware ---
app.use(express.json({ limit: '10kb' })); 
app.use(cookieParser());
app.use(compression()); // сжатие response

app.use(helmet()); // устанавливает безопасные HTTP-заголовки
app.use(mongoSanitize()); // защита от NoSQL инъекций
app.use(xss()); // защита от XSS
app.use(hpp()); // защита от HTTP Parameter Pollution

// --- CORS ---
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100, 
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);

app.use('/products', productsRouter);
app.use('/comments', commentRouter);
app.use('/auth', authRouter);
app.use('/blog', blogRouter);
app.use('/blogReplies', blogRepliesRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
