import { useEffect, useState } from 'react'
import { getBlogRepliesById } from '@api/blogReplies'
import type { BlogReplies } from '../types/blogReplies'

export const useBlogReplies = (id: string) => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [replies, setReplies] = useState<BlogReplies[]>([])

	useEffect(() => {
		if (!id) return

		const load = async () => {
			try {
				const data = await getBlogRepliesById(id)
				setReplies(data)
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError('Ошибка при загрузке данных')
				}
			} finally {
				setLoading(false)
			}
		}

		setLoading(true)
		setError(null)
		load()
	}, [id])

	return { loading, error, replies }
}
