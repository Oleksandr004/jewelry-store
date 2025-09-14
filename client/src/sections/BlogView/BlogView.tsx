import styles from '@sections/BlogView/BlogView.module.scss'

import { useParams } from 'react-router-dom'

import { useBlogById } from '@hooks/useBlogById'

import facebookIcon from '@assets/icons/facebook.png'
import instagramIcon from '@assets/icons/instagram.png'
import twiterIcon from '@assets/icons/twiter.png'

const BlogView = () => {
	const { id } = useParams()
	const { blog, error, loading } = useBlogById(id)

	if (loading) {
		return <p className={styles.loading}>Loading...</p>
	}

	if (error) {
		return <p className={styles.error}>Error: {error}</p>
	}

	if (!blog) {
		return <p className={styles.error}>Blog not found</p>
	}

	console.log(blog)
	return (
		<>
			<h2 className={styles.title}>Fast Fashion, And Faster Fashion</h2>
			<p className={styles.subtitle}>by ANNY JOHNSON - October 8,2020</p>
			<div className={styles.img_container}>
				<img src={blog?.imgUrl} alt='post photo' />
			</div>
			<div className={styles.container}>
				<p className={styles.text}>{blog?.postText}</p>
				<div className={styles.row}>
					<div className={styles.tags_row}>
						<p className={styles.tag_title}>Tags</p>
						<div className={styles.line} />
						<p className={styles.tag}>{blog?.tag}</p>
					</div>
					<div className={styles.share_row}>
						<p className={styles.share_title}>Share</p>
						<div className={styles.line} />
						<div className={styles.icons_row}>
							<img src={facebookIcon} alt='facebook icon' />
							<img src={instagramIcon} alt='instagram icon' />
							<img src={twiterIcon} alt='twiter icon' />
						</div>
					</div>
				</div>
				<div className={styles.horizontal_line} />
			</div>
		</>
	)
}

export default BlogView
