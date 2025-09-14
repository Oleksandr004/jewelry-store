import styles from '@sections/BlogSection/BlogSection.module.scss'
import BlogFilter from '@widgets/BlogFilter/BlogFilter'
import { useBlogs } from '@hooks/useBlogs'
import BlogCard from '@components/BlogCard/BlogCard'
import { useState } from 'react'
import PaginationControlsBtn from '@components/PaginationControlsBtn/PaginationControlsBtn'

const BlogSection = () => {
	const [page, setPage] = useState(1)
	const { blogs, error, loading, totalPages } = useBlogs(page, 4)

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Blog</h2>
			<div className={styles.content}>
				<BlogFilter />
				<div className={styles.body}>
					{loading && <p className={styles.loading}>Loading...</p>}
					{error && <p className={styles.error}>Error: {error}</p>}

					{!loading && !error && (
						<ul className={styles.grid}>
							{blogs?.map((item) => (
								<BlogCard key={item._id} blog={item} />
							))}
						</ul>
					)}
					<div className={styles.btn_row}>
						{Array.from({ length: totalPages }, (_, i) => (
							<PaginationControlsBtn
								key={i + 1}
								page={i + 1}
								isActive={page === i + 1}
								onClick={() => setPage(i + 1)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogSection
