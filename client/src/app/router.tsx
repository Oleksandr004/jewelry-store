import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@layout/MainLayout'
import HomePage from '@pages/HomePage'
import ShopPage from '@pages/ShopPage'
import ProductPage from '@pages/ProductPage'
import ContactPage from '@pages/ContactPage'
import AccountPage from '@pages/AccountPage'
import ForgetPassPage from '@pages/ForgetPassPage'
import NotFoundPage from '@pages/NotFoundPage'
import OurStoryPage from '@pages/OurStoryPage'
import BlogPage from '@pages/BlogPage'
import BlogDetailsPage from '@pages/BlogDetailsPage'
import CartPage from '@pages/CartPage'

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'shop', element: <ShopPage /> },
			{ path: 'shop/:id', element: <ProductPage /> },
			{ path: '/contact', element: <ContactPage /> },
			{ path: '/account', element: <AccountPage /> },
			{ path: '/forget-pass', element: <ForgetPassPage /> },
			{ path: '/story', element: <OurStoryPage /> },
			{ path: '/blog', element: <BlogPage /> },
			{ path: '/blog/:id', element: <BlogDetailsPage /> },
			{ path: '/cart', element: <CartPage /> },
			{ path: '*', element: <NotFoundPage /> },
		],
	},
])
