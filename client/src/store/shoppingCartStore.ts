import { create } from 'zustand'
import type { Product } from '../types/product'

interface ICartItem extends Product {
	quantity: number
}

interface ICartState {
	cart: ICartItem[]
	addToCart: (product: Product, quantity?: number) => void
	removeFromCart: (id: string) => void
	clearCart: () => void
	increaseQuantity: (id: string) => void
	decreaseQuantity: (id: string) => void
	getTotal: () => number
}

export const useShoppingCartStore = create<ICartState>((set, get) => ({
	cart: [],

	addToCart: (product: Product, quantity = 1) =>
		set((state: ICartState) => {
			const exists = state.cart.find((item) => item._id === product._id)

			if (exists) {
				return {
					cart: state.cart.map((item) =>
						item._id === product._id
							? { ...item, quantity: item.quantity + quantity }
							: item
					),
				}
			}

			return {
				cart: [...state.cart, { ...product, quantity }],
			}
		}),

	removeFromCart: (id: string) => {
		set((state: ICartState) => ({
			cart: state.cart.filter((item) => item._id !== id),
		}))
	},

	clearCart: () => set({ cart: [] }),

	getTotal: () =>
		get().cart.reduce(
			(sum: number, item: ICartItem) => sum + item.price * item.quantity,
			0
		),

	increaseQuantity: (id: string) =>
		set((state) => ({
			cart: state.cart.map((item) =>
				item._id === id ? { ...item, quantity: item.quantity + 1 } : item
			),
		})),

	decreaseQuantity: (id: string) =>
		set((state) => ({
			cart: state.cart.map((item) =>
				item._id === id && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			),
		})),
}))
