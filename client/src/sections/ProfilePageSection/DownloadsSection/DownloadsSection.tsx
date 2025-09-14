import styles from './DownloadsSection.module.scss'
import { useNavigate } from 'react-router-dom'

const DownloadsSection = () => {
	const navigation = useNavigate()

	return (
		<div style={{ marginBottom: 250, marginTop: 39 }}>
			<div className={styles.row}>
				<p className={styles.title}>No downloads available yet.</p>
				<p onClick={() => navigation('/shop')} className={styles.link}>
					BROWSE PRODUCT
				</p>
			</div>
		</div>
	)
}

export default DownloadsSection
