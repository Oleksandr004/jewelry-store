import styles from '@sections/ForgetPassSection/ForgetPassSection.module.scss'
import BlackBtn from '@components/BlackBtn/BlackBtn'
import CustomInput from '@components/CustomInput/CustomInput'

const ForgetPassSection = () => {
	return (
		<div className={styles.container}>
			<section>
				<h2 className={styles.title}>Have you Forgotten Your Password ?</h2>
				<p className={styles.subtitle}>
					If you've forgotten your password, enter your e-mail <br />
					address and we'll send you an e-mail{' '}
				</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 64,
						alignItems: 'center',
					}}
				>
					<CustomInput height={39} width={500} placeholder='Email' fullWidth />
					<BlackBtn text='RESET PASSWORD' marginBottom={252} />
				</div>
			</section>
		</div>
	)
}

export default ForgetPassSection
