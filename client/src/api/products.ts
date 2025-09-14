import axios from 'axios'
import type { Product } from '../types/product'

const API_BASE = import.meta.env.VITE_API_BASE

export const getAllProducts = async (): Promise<Product[]> => {
	const res = await axios.get<{ allProducts: Product[] }>(
		`${API_BASE}/products/all`
	)
	return res.data.allProducts
}

export const getProductById = async (id: string): Promise<Product> => {
	const res = await axios.get<{ product: Product }>(
		`${API_BASE}/products/${id}`
	)
	return res.data.product
}
