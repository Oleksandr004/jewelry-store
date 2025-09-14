import styles from '@sections/AboutProductSection/AboutProductSection.module.scss'

import addToCartImg from '../../assets/icons/add-to-cartI-icon.svg'

import type { Product } from '../../types/product'

import { useShoppingCartStore } from '../../store/shoppingCartStore'

import emailIcon from '@assets/icons/email.png'
import facebookIcon from '@assets/icons/facebook.png'
import instagramIcon from '@assets/icons/instagram.png'
import twiterIcon from '@assets/icons/twiter.png'
import likeIcon from '@assets/icons/like.png'
import { useState } from 'react'

import { Link } from 'react-router-dom'

type Props = {
	product: Product
}

const AboutProductSection = ({ product }: Props) => {
	const [quantity, setQuantity] = useState<number>(1)

	const [isShowNotification, setIsShowNotification] = useState(false)

	const addToCart = useShoppingCartStore((state) => state.addToCart)

	const increase = () => {
		setQuantity((prev) => prev + 1)
	}
	const decrease = () => {
		if (quantity == 1) return
		setQuantity((prev) => prev - 1)
	}

	const handleAddToCart = () => {
		addToCart(product, quantity)

		setIsShowNotification(true)

		setTimeout(() => {
			setIsShowNotification(false)
		}, 4000)
	}

	return (
		<div className={styles.container}>
			{isShowNotification && (
				<div className={styles.notification}>
					<div>
						<img src={addToCartImg} alt='add to cart icon' />
						<p>The item added to your Shopping bag.</p>
					</div>
					<Link to='/cart'>VIEW CART</Link>
				</div>
			)}
			<div className={styles.body}>
				<div
					style={{
						display: 'flex',
						gap: 39,
					}}
				>
					<div className={styles.colum_img}>
						<img src={product.imageUrl} alt='little img product' />
						<img src={product.imageUrl} alt='little img product' />
						<img src={product.imageUrl} alt='little img product' />
						<img src={product.imageUrl} alt='little img product' />
					</div>
					<img className={styles.main_img} src={product.imageUrl} alt='' />
				</div>
				<div>
					<p className={styles.title}>{product.title}</p>
					<p className={styles.price}>${product.price},00</p>
					<p className={styles.description}>{product.shortDescription}</p>
					<div className={styles.btn_row}>
						<div className={styles.quantity_btn}>
							<p onClick={decrease} style={{ cursor: 'pointer' }}>
								-
							</p>
							<p>{quantity}</p>
							<p onClick={increase} style={{ cursor: 'pointer' }}>
								+
							</p>
						</div>
						<a onClick={handleAddToCart} className={styles.add_btn}>
							ADD TO CART
						</a>
					</div>
					<div style={{ display: 'flex' }}>
						<img src={likeIcon} alt='like icon' />
						<div className={styles.line} />
						<div
							style={{
								display: 'flex',
								gap: 24,
							}}
						>
							<img src={emailIcon} alt='email icon' />
							<img src={facebookIcon} alt='facebook icon' />
							<img src={instagramIcon} alt='instagram icon' />
							<img src={twiterIcon} alt='twiter icon' />
						</div>
					</div>
					<p className={styles.sku}>
						SKU: <span> {product.SKU}</span>
					</p>
					<p className={styles.categories}>
						Categories: <span>{product.categories.join(', ')}</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutProductSection
