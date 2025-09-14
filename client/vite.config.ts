import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@layout': path.resolve(__dirname, './src/layout'),
			'@widgets': path.resolve(__dirname, './src/widgets'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@sections': path.resolve(__dirname, './src/sections'),
			'@types': path.resolve(__dirname, './src/types'),
			'@api': path.resolve(__dirname, './src/api'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
		},
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.scss'],
	},
})
