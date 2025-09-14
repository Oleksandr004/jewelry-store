import styles from '@sections/ContactUsSection/ContactUsSection.module.scss'
import CustomInput from '@components/CustomInput/CustomInput'
import BlackBtn from '@components/BlackBtn/BlackBtn'

const ContactUsSection = () => {
	return (
		<div className={styles.container}>
			<section>
				<h2 className={styles.title}>Contact Us</h2>
				<p className={styles.subtitle}>
					Say Hello send us your thoughts about our products or share <br />
					your ideas with our Team!
				</p>
				<div className={styles.grid}>
					<CustomInput placeholder='First name' width={396} height={39} />
					<CustomInput placeholder='Last name' width={396} height={39} />
					<CustomInput placeholder='Email' width={396} height={39} />
					<select className={styles.subject_input}>
						<option value='' disabled hidden>
							Subject
						</option>
						<option value='123'>General Inquiry</option>
						<option>Product Question</option>
						<option>Order Issue</option>
						<option>Payment Problem</option>
						<option>Shipping & Delivery</option>
					</select>
				</div>
				<textarea placeholder='Message' className={styles.message_input} />
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '252.5px',
					}}
				>
					<BlackBtn text='SEND' marginBottom={0} />
				</div>
			</section>
		</div>
	)
}

export default ContactUsSection
