import { useEffect, useState } from 'react'
import type { Blog } from '../types/blog'
import { getAllBlogs } from '@api/blogs'

export const useBlogs = (page = 1, limit = 4) => {
	const [blogs, setBlogs] = useState<Blog[] | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [totalPages, setTotalPages] = useState(1)

	useEffect(() => {
		const load = async () => {
			try {
				const data = await getAllBlogs(page, limit)
				setBlogs(data.blogs)
				setTotalPages(data.totalPages)
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError('Ошибка при загрузке данных')
				}
			} finally {
				setLoading(false)
			}
		}
		load()
	}, [page, limit])

	return { loading, error, blogs, totalPages }
}
