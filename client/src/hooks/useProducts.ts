import { useEffect, useState } from 'react'
import type { Product } from '../types/product'
import { getAllProducts } from '@api/products'

export const useProducts = () => {
	const [products, setProducts] = useState<Product[]>()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const load = async () => {
			try {
				const data = await getAllProducts()
				setProducts(data)
			} catch (error) {
				setError('Ошибка загрузки товаров' + error)
			} finally {
				setLoading(false)
			}
		}
		load()
	}, [])

	return { products, loading, error }
}
