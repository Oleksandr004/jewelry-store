import styles from '@sections/ReplyForm/ReplyForm.module.scss'
import CustomInput from '@components/CustomInput/CustomInput'
import BlackBtn from '@components/BlackBtn/BlackBtn'
import { useForm, Controller } from 'react-hook-form'
import { postBlogReply } from '@api/blogReplies'
import { useParams } from 'react-router-dom'

type TFormData = {
	name: string
	email: string
	website?: string
	comment: string
	saveData: boolean
}

const ReplyForm = () => {
	const { id: blogId } = useParams<{ id: string }>()
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<TFormData>({
		defaultValues: {
			name: '',
			email: '',
			website: '',
			comment: '',
			saveData: false,
		},
	})

	const onSubmit = async (data: TFormData) => {
		try {
			if (!blogId) {
				alert('Blog ID is missing')
				return
			}
			await postBlogReply({ ...data, blogId })
			alert('Comment sent successfully')
			reset()
		} catch {
			alert('Error sending comment')
		}
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Leave a reply</h2>
			<p className={styles.subtitle}>
				Your email address will not be published. Required fields are marked *
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
					<div>
						<Controller
							name='name'
							control={control}
							rules={{ required: 'Name is required' }}
							render={({ field }) => (
								<CustomInput
									{...field}
									height={35}
									width={670}
									placeholder='Enter your name*'
									fullWidth
								/>
							)}
						/>
						{errors.name && (
							<p className={styles.error}>{errors.name.message}</p>
						)}
					</div>

					<div>
						<Controller
							name='email'
							control={control}
							rules={{
								required: 'Email is required',
								pattern: {
									value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
									message: 'Invalid email format',
								},
							}}
							render={({ field }) => (
								<CustomInput
									{...field}
									height={35}
									width={670}
									placeholder='Enter your Email*'
									fullWidth
								/>
							)}
						/>
						{errors.email && (
							<p className={styles.error}>{errors.email.message}</p>
						)}
					</div>

					<Controller
						name='website'
						control={control}
						render={({ field }) => (
							<CustomInput
								{...field}
								height={35}
								width={670}
								placeholder='Enter your Website'
								fullWidth
							/>
						)}
					/>
				</div>
				<label className={styles.save_row}>
					<Controller
						name='saveData'
						control={control}
						render={({ field }) => (
							<input
								type='checkbox'
								checked={field.value}
								onChange={(e) => field.onChange(e.target.checked)}
								onBlur={field.onBlur}
								ref={field.ref}
							/>
						)}
					/>
					<p>
						Save my name, email, and website in this browser for the next time I
						comment
					</p>
				</label>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
					<div>
						<Controller
							name='comment'
							control={control}
							rules={{ required: 'Comment is required' }}
							render={({ field }) => (
								<CustomInput
									{...field}
									height={83}
									width={670}
									placeholder='Your Comment*'
									fullWidth
								/>
							)}
						/>
						{errors.comment && (
							<p className={styles.error}>{errors.comment.message}</p>
						)}
					</div>

					<BlackBtn
						marginBottom={0}
						text='POST COMMENT'
						centered={false}
						width='197px'
					>
						<button
							type='submit'
							style={{
								all: 'unset',
								cursor: 'pointer',
								width: '100%',
								height: '100%',
								display: 'block',
								textAlign: 'center',
							}}
						>
							POST COMMENT
						</button>
					</BlackBtn>
				</div>
			</form>
		</div>
	)
}

export default ReplyForm
