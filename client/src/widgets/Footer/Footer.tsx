import styles from '@widgets/Footer/Footer.module.scss'
import { Link } from 'react-router-dom'

import linkedinIcon from '@assets/icons/linkedin.svg'
import facebookIcon from '@assets/icons/facebook.svg'
import instagramIcon from '@assets/icons/instagram.svg'
import twiterIcon from '@assets/icons/twiter.svg'

const Footer = () => {
	return (
		<div className={styles.container}>
			<footer className={styles.footer}>
				<div className={styles.body_left}>
					<div className={styles.links_row}>
						<Link to='/contact'>CONTACT</Link>
						<Link to='/'>TERMS OF SERVICES</Link>
						<Link to='/'>SHIPPING AND RETURNS</Link>
					</div>
					<p className={styles.privacy}>
						<span>© 2021 Shelly.</span> Terms of use <span>and</span> privacy
						policy.
					</p>
				</div>
				<div className={styles.body_right}>
					<input
						className={styles.input}
						type='text'
						placeholder='Give an email, get the newsletter.'
					/>
					<div className={styles.line} />
					<div className={styles.social_row}>
						<img src={linkedinIcon} alt='linkedin icon' />
						<img src={facebookIcon} alt='facebook icon' />
						<img src={instagramIcon} alt='instagram icon' />
						<img src={twiterIcon} alt='twiter icon' />
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
