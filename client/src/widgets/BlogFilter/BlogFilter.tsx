import styles from '@widgets/BlogFilter/BlogFilter.module.scss'
import CustomInput from '@components/CustomInput/CustomInput'
import { useState } from 'react'

const BlogFilter = () => {
	const [activeFilter, setActiveFilter] = useState<string | null>(null)

	return (
		<div className={styles.container}>
			<CustomInput height={35} width={261} placeholder='Search...' />
			<p className={styles.title}>Categories</p>
			<ul className={styles.list}>
				<li>
					<a
						onClick={() => setActiveFilter('Fashion')}
						className={`${styles.list_item} ${
							activeFilter == 'Fashion' && styles.active
						}`}
					>
						Fashion
					</a>
				</li>
				<li>
					<a
						onClick={() => setActiveFilter('Style')}
						className={`${styles.list_item} ${
							activeFilter == 'Style' && styles.active
						}`}
					>
						Style
					</a>
				</li>
				<li>
					<a
						onClick={() => setActiveFilter('Accessories')}
						className={`${styles.list_item} ${
							activeFilter == 'Accessories' && styles.active
						}`}
					>
						Accessories
					</a>
				</li>
				<li>
					<a
						onClick={() => setActiveFilter('Season')}
						className={`${styles.list_item} ${
							activeFilter == 'Season' && styles.active
						}`}
					>
						Season
					</a>
				</li>
			</ul>
		</div>
	)
}

export default BlogFilter
