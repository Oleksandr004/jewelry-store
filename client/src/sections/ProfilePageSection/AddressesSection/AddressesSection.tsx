import { useState } from 'react'
import styles from './AddressesSection.module.scss'
import AddAddressForm from './AddAddressForm/AddAddressForm'

const AddressesSection = () => {
	const [showBillingForm, setShowBillingForm] = useState(false)
	const [showShippingForm, setShowShippingForm] = useState(false)

	return (
		<div className={styles.container}>
			<p>
				The following addresses will be used on the checkout page by default.
			</p>
			<div className={styles.row}>
				<div>
					<p className={styles.title}>Billing address</p>
					<p
						onClick={() => setShowBillingForm((prev) => !prev)}
						className={styles.add_btn}
					>
						{showBillingForm ? 'CLOSE' : 'ADD'}
					</p>

					{showBillingForm ? (
						<AddAddressForm />
					) : (
						<p className={styles.not_setup}>
							You have not set up this type of address yet.
						</p>
					)}
				</div>

				<div>
					<p className={styles.title}>Shipping address</p>
					<p
						onClick={() => setShowShippingForm((prev) => !prev)}
						className={styles.add_btn}
					>
						{showShippingForm ? 'CLOSE' : 'ADD'}
					</p>

					{showShippingForm ? (
						<AddAddressForm />
					) : (
						<p className={styles.not_setup}>
							You have not set up this type of address yet.
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default AddressesSection
