import styles from '@sections/ShopTheLatest/ShopTheLatest.module.scss'
import { Link } from 'react-router-dom'
import ProductCard from '@components/ProductCard/ProductCard'
import { useProducts } from '@hooks/useProducts'

const ShopTheLatest = () => {
	const { error, loading, products } = useProducts()
	if (loading) return <p>Загрузка...</p>
	if (error) return <p>{error}</p>
	if (!products?.length) return <p>Товары не найдены</p>

	return (
		<div className={styles.container}>
			<section>
				<div className={styles.title_row}>
					<p className={styles.title}>Shop The Latest</p>
					<Link to='/shop' className={styles.view_all}>
						View All
					</Link>
				</div>
				<div className={styles.grid}>
					{products?.map((item) => (
						<ProductCard
							key={item._id}
							name={item.title}
							imgUrl={item.imageUrl}
							price={item.price}
							imgSize={380}
							id={item._id}
						/>
					))}
				</div>
			</section>
		</div>
	)
}

export default ShopTheLatest
