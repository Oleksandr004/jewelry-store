import styles from '@sections/ShopSection/ShopSection.module.scss'
import FilterBar from '@widgets/FilterBar/FilterBar'
import { useProducts } from '@hooks/useProducts'
import ProductCard from '@components/ProductCard/ProductCard'

const ShopSection = () => {
	const { products, error, loading } = useProducts()

	return (
		<div className={styles.container}>
			<section>
				<p className={styles.title}>Shop The Latest</p>

				<div className={styles.content_row}>
					<FilterBar />
					<section className={styles.grid}>
						{loading && <p className={styles.status}>Loading Products...</p>}

						{error && (
							<p className={styles.error}>Error when loading products</p>
						)}

						{!loading && !error && products?.length === 0 && (
							<p className={styles.status}>Products not found</p>
						)}

						{!loading &&
							!error &&
							products?.map((item) => (
								<ProductCard
									key={item._id}
									id={item._id}
									name={item.title}
									imgUrl={item.imageUrl}
									price={item.price}
									imgSize={300}
								/>
							))}
					</section>
				</div>
			</section>
		</div>
	)
}

export default ShopSection
