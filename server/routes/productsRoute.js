import { Router } from 'express'
import {
	GetAllProducts,
	GetProductById,
} from '../controllers/productController.js'

const router = Router()

router.get('/all', GetAllProducts)
router.get('/:id', GetProductById)

export default router
