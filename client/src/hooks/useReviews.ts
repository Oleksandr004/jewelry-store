import { useEffect, useState } from 'react'
import type { Review } from '../types/review'
import { GetReviewsById } from '@api/reviews'

export const useReviews = (productId: string) => {
	const [reviews, setReviews] = useState<Review[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const data = await GetReviewsById(productId)
				setReviews(data)
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError('Неизвестная ошибка при загрузке отзывов')
				}
			} finally {
				setLoading(false)
			}
		}

		if (productId) fetchReviews()
	}, [productId])

	return { reviews, loading, error }
}
