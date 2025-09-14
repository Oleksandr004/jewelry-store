import { useState, useEffect } from 'react'
import { getBlogById } from '@api/blogs'
import type { Blog } from '../types/blog'

export const useBlogById = (id?: string) => {
	const [blog, setBlog] = useState<Blog | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!id) return
		const load = async () => {
			try {
				const data = await getBlogById(id)
				setBlog(data.blog)
			} catch (err) {
				setError(err instanceof Error ? err.message : String(err))
			} finally {
				setLoading(false)
			}
		}
		load()
	}, [id])
	return { loading, blog, error }
}
