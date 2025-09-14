import styles from './CartSidebar.module.scss'
import { useShoppingCartStore } from '../../store/shoppingCartStore'
import { useNavigate } from 'react-router-dom'
const CartSidebar = () => {
	const navigation = useNavigate()

	const { cart, getTotal } = useShoppingCartStore()

	return (
		<div className={styles.overlay}>
			<div className={styles.sidebar}>
				<h2 className={styles.title}>Shopping bag</h2>
				<p className={styles.quantity_items}>{cart.length} item(-s)</p>
				{cart.length === 0 ? (
					<p>Basket empty</p>
				) : (
					<>
						<ul className={styles.items_column}>
							{cart.map((item) => (
								<li key={item._id} className={styles.item_card}>
									<img
										className={styles.item_img}
										src={item.imageUrl}
										alt='item img'
									/>
									<div>
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'space-between',
											}}
										>
											<p className={styles.item_name}>{item.title}</p>
											<p onClick={() => {}} style={{ cursor: 'pointer' }}>
												x
											</p>
										</div>
										<p className={styles.item_material}>
											{item.aditionaInfo.colours}
										</p>
										<p className={styles.item_price}>${item.price}</p>
									</div>
								</li>
							))}
						</ul>
					</>
				)}

				<div style={{ marginTop: 'auto' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<p>{`Subtotal (${cart.length} items)`}</p>
						<p className={''}>$ {getTotal()}</p>
					</div>
					<button onClick={() => navigation('/cart')} className={styles.btn}>
						View Cart
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartSidebar
