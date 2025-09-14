import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import '@styles/reset.css'
import { AuthProvider } from '../context/AuthContext'

createRoot(document.getElementById('root')!).render(
	<AuthProvider>
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	</AuthProvider>
)
