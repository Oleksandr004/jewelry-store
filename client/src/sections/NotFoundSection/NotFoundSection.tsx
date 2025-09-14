import styles from '@sections/NotFoundSection/NotFoundSection.module.scss'

const NotFoundSection = () => {
	return (
		<div className={styles.container}>
			<section>
				<h2 className={styles.title}>404 ERROR</h2>
				<p className={styles.subtitle}>
					This page not found; <br />
					back to home and start again
				</p>
				<a className={styles.btn} href='/'>
					HOMEPAGE
				</a>
			</section>
		</div>
	)
}

export default NotFoundSection
