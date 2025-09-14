import styles from '@sections/AccountSection/AccountSection.module.scss'
import { useState } from 'react'

import RegisterForm from '@sections/AccountSection/RegisterForm/RegisterForm'
import SignInForm from '@sections/AccountSection/SignInForm/SignInForm'

const AccountSection = () => {
	const [activeTab, setActiveTab] = useState<'signIn' | 'register'>('signIn')

	return (
		<div className={styles.container}>
			<section>
				<h2 className={styles.title}>My account</h2>
				<div className={styles.tabs}>
					<p onClick={() => setActiveTab('signIn')}>Sign in</p>
					<div
						className={
							activeTab == 'signIn' ? styles.sign_active : styles.sign_disable
						}
					/>
					<p onClick={() => setActiveTab('register')}>Register</p>
					<div
						className={
							activeTab == 'register'
								? styles.register_active
								: styles.register_disable
						}
					/>
				</div>
				{activeTab == 'register' ? (
					<RegisterForm setActiveTab={setActiveTab} />
				) : (
					<SignInForm />
				)}
			</section>
		</div>
	)
}

export default AccountSection
