import { Router } from 'express'
import { GetAllBlogs, getBlogById } from '../controllers/blogController.js'

const router = Router()

router.get('/all-post', GetAllBlogs)
router.get('/:id', getBlogById)

export default router
