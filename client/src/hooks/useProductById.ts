import { useEffect, useState } from 'react'
import type { Product } from '../types/product'
import { getProductById } from '@api/products'

export const useProductById = (id: string) => {
	const [product, setProduct] = useState<Product | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (!id) return
		const load = async () => {
			try {
				const data = await getProductById(id)
				setProduct(data)
			} catch (error) {
				setError(
					'Ошибка загрузки товара: ' +
						(error instanceof Error ? error.message : String(error))
				)
			} finally {
				setLoading(false)
			}
		}

		load()
	}, [id])
	return { product, loading, error }
}
