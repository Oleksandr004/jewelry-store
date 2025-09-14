import styles from './SimilarItems.module.scss'
import ProductCard from '@components/ProductCard/ProductCard'
import type { Product } from '../../types/product'

type Props = {
	product: Product
	allProducts?: Product[]
}

const SimilarItems = ({ product, allProducts }: Props) => {
	if (!allProducts || allProducts.length === 0) return null

	const getRandomItems = (array: Product[], count: number): Product[] => {
		const filtered = array.filter((item) => item._id !== product._id)
		const shuffled = [...filtered].sort(() => 0.5 - Math.random())
		return shuffled.slice(0, count)
	}

	const similarItems = getRandomItems(allProducts, 3)

	return (
		<div className={styles.container}>
			<section>
				<p className={styles.title}>Similar Items</p>
				<div className={styles.row}>
					{similarItems.map((item) => (
						<ProductCard
							key={item._id}
							id={item._id}
							imgSize={380}
							imgUrl={item.imageUrl}
							name={item.title}
							price={item.price}
						/>
					))}
				</div>
			</section>
		</div>
	)
}

export default SimilarItems
