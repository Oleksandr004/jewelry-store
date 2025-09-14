import { Router } from 'express'
import {
	getRepliesById,
	createBlogReply,
} from '../controllers/blogRepliesController.js'

const router = Router()

router.get('/:id', getRepliesById)
router.post('/create', createBlogReply)

export default router
