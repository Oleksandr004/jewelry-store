import styles from '@sections/BlogCommentsSection/BlogCommentsSection.module.scss'
import { useBlogReplies } from '@hooks/useBlogReplies'
import { useParams } from 'react-router-dom'
import BlogCommentsCard from '@components/BlogCommentsCard/BlogCommentsCard'

const BlogCommentsSection = () => {
	const { id } = useParams() as { id: string }
	const { error, loading, replies } = useBlogReplies(id)

	if (loading) {
		return (
			<div className={styles.container}>
				<section>
					<h2 className={styles.title}>Comments</h2>
					<p>Loading comments...</p>
				</section>
			</div>
		)
	}

	if (error) {
		return (
			<div className={styles.container}>
				<section>
					<h2 className={styles.title}>Comments</h2>
					<p className={styles.error}>{error}</p>
				</section>
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<section>
				<h2 className={styles.title}>Comments({replies.length})</h2>
				<div className={styles.comments_column}>
					{replies.map((replie) => (
						<BlogCommentsCard
							key={replie._id}
							name={replie.name}
							createdAt={replie.createdAt}
							comment={replie.comment}
						/>
					))}
				</div>
			</section>
		</div>
	)
}

export default BlogCommentsSection
