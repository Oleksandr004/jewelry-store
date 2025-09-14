import styles from '@sections/AccountSection/SignInForm/SignInForm.module.scss'
import CustomInput from '@components/CustomInput/CustomInput'
import BlackBtn from '@components/BlackBtn/BlackBtn'
import { useForm, Controller } from 'react-hook-form'
import { getMe, loginUser } from '@api/auth'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'

const SignInForm = () => {
	type TFormData = {
		email: string
		password: string
		remeber: boolean
	}

	const [isLoading, setIsLoading] = useState(false)
	const { control, handleSubmit } = useForm<TFormData>()

	const { setUser } = useAuth()

	const onSubmit = async (data: TFormData) => {
		setIsLoading(true)
		try {
			await loginUser({
				email: data.email,
				password: data.password,
			})

			const me = await getMe()
			if (me.user) setUser(me.user)

			alert('Login successful')
		} catch (err: unknown) {
			const error = err as AxiosError<{ message: string }>
			alert(error.response?.data?.message || 'Login error')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 46,
				}}
			>
				<div>
					<Controller
						name='email'
						control={control}
						render={({ field }) => (
							<CustomInput
								{...field}
								height={39}
								placeholder='Email'
								width={500}
							/>
						)}
					/>
				</div>
				<div>
					<Controller
						name='password'
						control={control}
						render={({ field }) => (
							<CustomInput
								{...field}
								height={39}
								placeholder='Password'
								width={500}
							/>
						)}
					/>
				</div>
			</div>
			<div className={styles.remember_row}>
				<input className={styles.remeber_checkbox} type='checkbox' />
				<p className={styles.remember_text}>Remember me</p>
			</div>
			<BlackBtn
				marginBottom={13}
				text={isLoading ? 'Loading...' : 'SIGN IN '}
			/>
			<a className={styles.forget} href='/forget-pass'>
				Have you forgotten your password?
			</a>
		</form>
	)
}

export default SignInForm
