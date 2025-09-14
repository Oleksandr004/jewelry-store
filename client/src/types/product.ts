export interface Product {
	_id: string
	title: string
	shortDescription: string
	description: string
	imageUrl: string
	price: number
	categories: string[]
	SKU: number
	aditionaInfo: {
		weight: number
		dimentions: string | null
		colours: string[]
		material: string
	}
}
