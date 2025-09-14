export interface Review {
	_id: string
	productId: string
	name: string
	email: string
	rating: number
	comment: string
	createdAt: Date
	updateAt: Date
	__v: number
}
