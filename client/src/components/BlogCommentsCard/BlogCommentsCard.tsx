import styles from '@components/BlogCommentsCard/BlogCommentsCard.module.scss'
import replyIcon from '@assets/icons/reply.png'

type Props = {
	name: string
	createdAt: Date | string
	comment: string
}

const BlogCommentsCard = ({ comment, createdAt, name }: Props) => {
	const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	})
	return (
		<div>
			<div className={styles.row}>
				<div
					style={{
						display: 'flex',
						gap: 16,
						alignItems: 'center',
					}}
				>
					<p className={styles.name}>{name}</p>
					<p className={styles.date}>{formattedDate}</p>
				</div>
				<div
					style={{
						display: 'flex',
						gap: 8,
						alignItems: 'center',
					}}
				>
					<img src={replyIcon} alt='reply icon' />
					<p className={styles.reply}>Reply</p>
				</div>
			</div>
			<p className={styles.comment}>{comment}</p>
		</div>
	)
}

export default BlogCommentsCard
