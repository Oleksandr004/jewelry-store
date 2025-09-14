import { Router } from 'express'
import {
	getAllProductComments,
	createComment,
	getAverageRating,
} from '../controllers/commentController.js'

const router = Router()

router.post('/', createComment)
router.get('/:id', getAllProductComments)
router.get('/:id/rating', getAverageRating)

export default router
