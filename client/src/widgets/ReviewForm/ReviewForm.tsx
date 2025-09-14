import styles from '@widgets/ReviewForm/ReviewForm.module.scss'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { Rating } from '@mui/material'
import { SubmitReview } from '@api/reviews'
import { useState } from 'react'

type ReviewFormInputs = {
	name: string
	email: string
	comment: string
	rating: number
}

type Props = {
	productId: string
}

const ReviewForm = ({ productId }: Props) => {
	const [rating, setRating] = useState<number | null>(null)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ReviewFormInputs>()

	const onSubmit: SubmitHandler<ReviewFormInputs> = async (data) => {
		if (!rating) {
			alert('Please provide a rating')
			return
		}
		const reviewData = {
			...data,
			rating,
			productId,
		}
		console.log('reviewData:', reviewData)
		try {
			const res = await SubmitReview(reviewData)
			console.log('Sent successfully:', res)
			reset()
			setRating(null)
		} catch (error) {
			console.error('Sending error:', error)
			alert('Error when sending feedback')
		}
	}

	return (
		<div className={styles.container}>
			<p className={styles.title}>Add a Review</p>
			<p className={styles.subtitle}>
				Your email address will not be published. Required fields are marked *
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<textarea
					{...register('comment', { required: 'Review is required' })}
					className={styles.review}
					placeholder='Your Review*'
				/>
				{errors.comment && (
					<p className={styles.error}>{errors.comment.message}</p>
				)}

				<input
					{...register('name', { required: 'Name is required' })}
					className={styles.name}
					placeholder='Enter your name*'
					type='text'
				/>
				{errors.name && <p className={styles.error}>{errors.name.message}</p>}

				<input
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
							message: 'Invalid email format',
						},
					})}
					className={styles.email}
					placeholder='Enter your Email*'
					type='email'
				/>
				{errors.email && <p className={styles.error}>{errors.email.message}</p>}

				<div className={styles.save}>
					<input type='checkbox' />
					<p>
						Save my name, email, and website in this browser for the next time I
						comment
					</p>
				</div>

				<p className={styles.rating}>Your Rating*</p>
				<Rating
					name='half-rating'
					value={rating}
					precision={0.5}
					onChange={(_, newValue) => setRating(newValue)}
				/>
				{!rating && <p className={styles.error}>Rating is required</p>}

				<button type='submit' className={styles.btn}>
					Submit
				</button>
			</form>
		</div>
	)
}

export default ReviewForm
