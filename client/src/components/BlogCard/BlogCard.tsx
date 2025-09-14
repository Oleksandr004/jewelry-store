import styles from '@components/BlogCard/BlogCard.module.scss'
import type { Blog } from '../../types/blog'

type Props = {
	blog: Blog
}

const BlogCard = ({ blog }: Props) => {
	const formatedDate = new Date(blog.createdAt).toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

	const shortenText = (text: string, limit: number) => {
		return text.length > limit ? text.slice(0, limit).trim() + '...' : text
	}

	return (
		<li>
			<img className={styles.img} src={blog.imgUrl} alt='blog img' />
			<p className={styles.date}>
				{blog.tag} - {formatedDate}
			</p>
			<p className={styles.title}>{blog.title}</p>
			<p className={styles.subtitle}>{shortenText(blog.postText, 108)}</p>
			<a href={`/blog/${blog._id}`} className={styles.link}>
				Read More
			</a>
		</li>
	)
}

export default BlogCard
