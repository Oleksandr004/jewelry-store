import styles from './AccountDetailsForm.module.scss'
import CustomInput from '@components/CustomInput/CustomInput'
import BlackBtn from '@components/BlackBtn/BlackBtn'

const AccountDetailsForm = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Account details</h2>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 37,
				}}
			>
				<CustomInput height={35} placeholder='First name*' width={500} />
				<CustomInput height={35} placeholder='Last name*' width={500} />
				<div>
					<CustomInput height={35} placeholder='Display name*' width={500} />
					<p className={styles.dislay_name_desc}>
						This will be how your name will be displayed in the account section
						and in reviews.
					</p>
				</div>
				<CustomInput height={35} placeholder='Email address*' width={500} />
			</div>
			<h3 className={styles.subtitle}>Change password</h3>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 37,
					marginBottom: 64,
				}}
			>
				<CustomInput
					height={35}
					placeholder='Current password (leave blank to leave unchanged)'
					width={500}
				/>
				<CustomInput
					height={35}
					placeholder='New password (leave blank to leave unchanged)'
					width={500}
				/>
				<CustomInput
					height={35}
					placeholder='Confirm new password'
					width={500}
				/>
			</div>
			<BlackBtn text='SAVE CHANGES' marginBottom={168} width='500' />
		</div>
	)
}

export default AccountDetailsForm
