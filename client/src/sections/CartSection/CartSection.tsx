import styles from './CartSection.module.scss'

import BlackBtn from '@components/BlackBtn/BlackBtn'
import CustomInput from '@components/CustomInput/CustomInput'

import { useShoppingCartStore } from '../../store/shoppingCartStore'

const CartSection = () => {
	const { cart, removeFromCart, getTotal, decreaseQuantity, increaseQuantity } =
		useShoppingCartStore()

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Shopping Cart</h2>
			<div className={styles.row}>
				<div className={styles.cart_element}>
					<ul>
						{cart.map((item) => (
							<>
								<li
									style={{
										display: 'flex',
										gap: 40,
										marginBottom: 39.5,
										maxWidth: 526,
									}}
									key={item._id}
								>
									<img className={styles.img} src={item.imageUrl} alt='' />
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											width: '100%',
										}}
									>
										<div
											style={{
												flex: '1 1 auto',
												paddingRight: 20,
											}}
										>
											<p className={styles.name}>{item.title}</p>
											<p>{item.aditionaInfo.material}</p>
											<p className={styles.price}>${item.price},00</p>
										</div>
										<div
											style={{
												display: 'flex',
												gap: 52,
												marginLeft: 'auto',
											}}
										>
											<div className={styles.quality_btn}>
												<p
													onClick={() => {
														decreaseQuantity(item._id)
													}}
												>
													-
												</p>
												<p>{item.quantity}</p>
												<p onClick={() => increaseQuantity(item._id)}>+</p>
											</div>
											<p
												onClick={() => {
													removeFromCart(item._id)
												}}
												style={{ cursor: 'pointer' }}
											>
												x
											</p>
										</div>
									</div>
								</li>
								<div className={styles.left_line} />{' '}
							</>
						))}
					</ul>

					<div className={styles.cupon_section}>
						<CustomInput height={41} placeholder='Cupon Code' width={336} />
						<BlackBtn marginBottom={0} text='APPLY COUPON' width='168px' />
					</div>
				</div>
				<div style={{ maxWidth: 462, marginTop: 39 }}>
					<h3 className={styles.subtitle}>Cart totals</h3>
					<div
						style={{
							display: 'flex',
							gap: 128,
						}}
					>
						<div className={styles.totals_titles}>
							<p>SUBTOTAL</p>
							<p>SHIPPING</p>
						</div>
						<div className={styles.totals_desc}>
							<p>$ {getTotal()}.00</p>
							<p>
								Shipping costs will be calculated once you have provided
								address.
							</p>
						</div>
					</div>
					{/* <div className={styles.right_line} /> */}
					<div className={styles.total_price_row}>
						<p>Total</p>
						<p>$ {getTotal()},00</p>
					</div>
					<div className={styles.checkout_btn}>
						<BlackBtn
							text='PROCEED TO CHECKOUT'
							width='462px'
							marginBottom={281}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartSection
