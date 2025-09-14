import product from '../models/product.js'

export const GetAllProducts = async (req, res) => {
	try {
		const allProducts = await product.find()
		return res.status(201).json({
			allProducts,
		})
	} catch (error) {
		res.status(400).json({
			message: error.message,
		})
	}
}
export const GetProductById = async function (req, res) {
	try {
		const productItem = await product.findById(req.params.id)
		return res.status(201).json({
			product: productItem,
		})
	} catch (error) {
		res.status(400).json({
			message: error.message,
		})
	}
}
