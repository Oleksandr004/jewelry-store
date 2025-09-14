import styles from '@sections/ProductDetailsTabs/ProductDetailsTabs.module.scss'
import { useState } from 'react'
import type { Product } from '../../types/product'
import Description from '@sections/ProductDetailsTabs/Description/Description'
import AdditionalInfo from '@sections/ProductDetailsTabs/AdditionalInfo/AdditionalInfo'
import Reviews from '@sections/ProductDetailsTabs/Reviews/Reviews'
import { useReviews } from '@hooks/useReviews'

type Props = {
	product: Product
}

const ProductDetailsTabs = ({ product }: Props) => {
	const { error, loading, reviews } = useReviews(product._id)

	const renderTabContent = () => {
		switch (activeTab) {
			case 'description':
				return <Description desc={product.description} />
			case 'info':
				return (
					<AdditionalInfo
						weight={product.aditionaInfo.weight}
						colours={product.aditionaInfo.colours}
						material={product.aditionaInfo.material}
						dimentions={product.aditionaInfo.dimentions}
					/>
				)
			case 'reviews':
				if (loading) return <p>Loading reviews...</p>
				if (error) return <p className={styles.error}>{error}</p>
				return <Reviews reviews={reviews} productId={product._id} />
			default:
				return null
		}
	}
	const [activeTab, setActiveTab] = useState<
		'description' | 'info' | 'reviews'
	>('description')
	return (
		<div className={styles.container}>
			<section>
				<div className={styles.row}>
					<p
						onClick={() => setActiveTab('description')}
						className={`${styles.option} ${
							activeTab == 'description' ? styles.active : ''
						}`}
					>
						Description
					</p>
					<p
						onClick={() => setActiveTab('info')}
						className={`${styles.option}  ${
							activeTab == 'info' ? styles.active : ''
						}`}
					>
						Aditional information
					</p>
					<p
						onClick={() => setActiveTab('reviews')}
						className={`${styles.option}  ${
							activeTab == 'reviews' ? styles.active : ''
						}`}
					>
						Reviews({reviews.length})
					</p>
				</div>
				<div className={styles.line} />
				{renderTabContent()}
			</section>
		</div>
	)
}

export default ProductDetailsTabs
