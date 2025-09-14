import styles from '@components/ProductCard/ProductCard.module.scss'
import { Link } from 'react-router-dom'

type ProductCardProps = {
	id: string
	name: string
	price: number
	imgUrl: string
	imgSize: number
}

const ProductCard = ({
	id,
	name,
	price,
	imgUrl,
	imgSize,
}: ProductCardProps) => {
	return (
		<Link to={`/shop/${id}`} className={styles.link}>
			<img
				style={{
					maxHeight: imgSize,
					maxWidth: imgSize,
				}}
				src={imgUrl}
				alt='product image'
			/>
			<p className={styles.name}>{name}</p>
			<p className={styles.price}>${price},00</p>
		</Link>
	)
}

export default ProductCard
