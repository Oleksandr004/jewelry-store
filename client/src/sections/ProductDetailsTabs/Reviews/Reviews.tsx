import styles from '@sections/ProductDetailsTabs/Reviews/Reviews.module.scss'
import ReviewForm from '@widgets/ReviewForm/ReviewForm'
import type { Review } from '../../../types/review'
import ReviewCard from '@components/ReviewCard/ReviewCard'

type Props = {
	reviews: Review[]
	productId: string
}

const Reviews = ({ reviews, productId }: Props) => {
	return (
		<div className={styles.row}>
			<div>
				<p className={styles.title}>
					{reviews.length} Reviews for lira earings
				</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 20,
					}}
				>
					{reviews.map((review) => (
						<ReviewCard
							key={review._id}
							name={review.name}
							date={review.createdAt}
							rating={review.rating}
							reviewText={review.comment}
						/>
					))}
				</div>
			</div>
			<ReviewForm productId={productId} />
		</div>
	)
}

export default Reviews
