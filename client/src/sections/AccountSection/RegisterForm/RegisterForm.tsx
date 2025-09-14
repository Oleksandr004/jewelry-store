import styles from '@sections/AccountSection/RegisterForm/RegisterForm.module.scss'
import CustomInput from '@components/CustomInput/CustomInput'
import BlackBtn from '@components/BlackBtn/BlackBtn'
import { registerUser } from '@api/auth'
import { useForm, Controller } from 'react-hook-form'
import { AxiosError } from 'axios'

type Props = {
	setActiveTab: (tab: 'signIn' | 'register') => void
}

type TFormData = {
	username: string
	email: string
	password: string
	retypePassword: string
}

const RegisterForm = ({ setActiveTab }: Props) => {
	const { control, handleSubmit } = useForm<TFormData>()

	const onSubmit = async (data: TFormData) => {
		if (data.password !== data.retypePassword) {
			alert("Passwords don't match")
			return
		}
		try {
			await registerUser({
				email: data.email,
				username: data.username,
				password: data.password,
			})

			setActiveTab('signIn')
		} catch (err: unknown) {
			console.log(err)
			const error = err as AxiosError<{ message: string }>
			alert(error.response?.data?.message || 'Login error')
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
						name='username'
						control={control}
						render={({ field }) => (
							<CustomInput
								{...field}
								height={39}
								placeholder='Username'
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
				<div>
					<Controller
						name='retypePassword'
						control={control}
						render={({ field }) => (
							<CustomInput
								{...field}
								height={39}
								placeholder='Retype Password'
								width={500}
							/>
						)}
					/>
				</div>
			</div>

			<div style={{ marginTop: 30, marginBottom: 10 }}>
				<BlackBtn marginBottom={13} text='REGISTER' />
			</div>
			<a className={styles.not_register}>
				Already have an account?
				<span
					style={{ cursor: 'pointer', color: 'black', fontWeight: 900 }}
					onClick={() => setActiveTab('signIn')}
				>
					SignIn
				</span>
			</a>
		</form>
	)
}

export default RegisterForm
