import styles from '@components/ReviewCard/ReviewCard.module.scss'

type Props = {
	name: string
	date: Date
	rating: number
	reviewText: string
}

const ReviewCard = ({ name, date, reviewText }: Props) => {
	console.log('RAW date value:', date)
	const parsedDate = new Date(date)
	const formattedDate = !isNaN(parsedDate.getTime())
		? new Intl.DateTimeFormat('en-GB', {
				day: 'numeric',
				month: 'short',
				year: 'numeric',
		  }).format(parsedDate)
		: 'Invalid date'

	return (
		<div className={styles.container}>
			<div className={styles.row}>
				<p className={styles.name}>{name}</p>
				<p className={styles.date}>{formattedDate}</p>
			</div>
			<p className={styles.review}>{reviewText}</p>
		</div>
	)
}

export default ReviewCard
