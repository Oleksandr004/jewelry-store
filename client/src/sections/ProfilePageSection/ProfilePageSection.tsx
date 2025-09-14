import AccountDetailsForm from './AccountDetailsForm/AccountDetailsForm'
import AddressesSection from './AddressesSection/AddressesSection'
import DownloadsSection from './DownloadsSection/DownloadsSection'
import OrdersSecion from './OrdersSecion/OrdersSecion'
import styles from './ProfilePageSection.module.scss'
import { useState } from 'react'

import { logout } from '@api/auth'
import { useAuth } from '../../context/AuthContext'

const ProfilePageSection = () => {
	const [selectedOption, setSelectedOption] = useState<
		'dashboard' | 'orders' | 'downloads' | 'adrresses' | 'details'
	>('dashboard')

	const { setUser } = useAuth()

	const handleLogOut = () => {
		if (confirm('Are you sure you want to log out of your account?')) {
			logout()
			setUser(null)
		}
	}

	return (
		<section>
			<div className={styles.container}>
				<h2 className={styles.title}>My Account</h2>
				<div className={styles.options_row}>
					<p
						onClick={() => setSelectedOption('dashboard')}
						className={`${styles.option} ${
							selectedOption === 'dashboard' ? styles.active : ''
						}`}
					>
						Dashboard
					</p>
					<p
						onClick={() => setSelectedOption('orders')}
						className={`${styles.option} ${
							selectedOption === 'orders' ? styles.active : ''
						}`}
					>
						Orders
					</p>
					<p
						onClick={() => setSelectedOption('downloads')}
						className={`${styles.option} ${
							selectedOption === 'downloads' ? styles.active : ''
						}`}
					>
						Downloads
					</p>
					<p
						onClick={() => setSelectedOption('adrresses')}
						className={`${styles.option} ${
							selectedOption === 'adrresses' ? styles.active : ''
						}`}
					>
						Addresses
					</p>
					<p
						onClick={() => setSelectedOption('details')}
						className={`${styles.option} ${
							selectedOption === 'details' ? styles.active : ''
						}`}
					>
						Account details
					</p>
					<p onClick={handleLogOut} className={styles.option}>
						Logout
					</p>
				</div>
				<div className={styles.line} />

				{selectedOption == 'dashboard' && (
					<div className={styles.dashboard_section}>
						<p className={styles.dashboard_text}>
							Hello Vitatheme (not Vitatheme? <span>Log out</span>)
							<br />
							From your account dashboard you can view your
							<span onClick={() => setSelectedOption('orders')}>
								recent orders
							</span>
							, manage your
							<span onClick={() => setSelectedOption('adrresses')}>
								shipping and billing addresses
							</span>
							, and edit your
							<span onClick={() => setSelectedOption('details')}>
								password and account details.
							</span>
						</p>
					</div>
				)}
				{selectedOption == 'orders' && <OrdersSecion />}
				{selectedOption == 'downloads' && <DownloadsSection />}
				{selectedOption == 'adrresses' && <AddressesSection />}
				{selectedOption == 'details' && <AccountDetailsForm />}
			</div>
		</section>
	)
}

export default ProfilePageSection
