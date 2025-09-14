import styles from './AddAddressForm.module.scss'

import CustomInput from '@components/CustomInput/CustomInput'
import BlackBtn from '@components/BlackBtn/BlackBtn'

const AddAddressForm = () => {
	return (
		<div className={styles.container}>
			<div className={styles.name_row}>
				<CustomInput height={39} width={270} placeholder='First name*' />
				<CustomInput height={39} width={270} placeholder='Last name*' />
			</div>
			<div className={styles.info_column}>
				<CustomInput height={39} width={580} placeholder='Company name' />
				<CustomInput height={39} width={580} placeholder='Street Address *' />
				<CustomInput height={39} width={580} placeholder='Postcode / ZIP *' />
				<CustomInput height={39} width={580} placeholder='Town / City *' />
				<CustomInput height={39} width={580} placeholder='Phone *' />
				<CustomInput height={39} width={580} placeholder='Email *' />
				<div style={{ marginTop: 64 }}>
					<BlackBtn text='SAVE ADDRESS' width='244px' marginBottom={250} />
				</div>
			</div>
		</div>
	)
}

export default AddAddressForm
