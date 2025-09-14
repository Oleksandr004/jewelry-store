import AboutProductSection from '@sections/AboutProductSection/AboutProductSection'
import { useParams } from 'react-router-dom'
import { useProductById } from '@hooks/useProductById'
import ProductDetailsTabs from '@sections/ProductDetailsTabs/ProductDetailsTabs'
import SimilarItems from '@sections/SimilarItems/SimilarItems'
import { useProducts } from '@hooks/useProducts'
import { useEffect } from 'react'

const ProductPage = () => {
	const { id = '' } = useParams<{ id: string }>()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [id])

	const { product, loading, error } = useProductById(id)

	const { products: allProducts } = useProducts()

	if (!id) return <p>Invalid product id</p>

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error}</p>
	if (!product) return <p>Products not founded</p>

	return (
		<>
			<AboutProductSection product={product} />
			<ProductDetailsTabs product={product} />
			<SimilarItems product={product} allProducts={allProducts} />
		</>
	)
}

export default ProductPage
