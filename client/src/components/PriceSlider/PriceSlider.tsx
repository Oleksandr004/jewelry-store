import { Slider, Typography, Box } from '@mui/material'
import { useState } from 'react'
import styles from '@components/PriceSlider/PriceSlider.module.scss'

const PriceSlider = () => {
	const [price, setPrice] = useState<number[]>([40, 180])

	const handleChange = (_event: Event, newValue: number | number[]) => {
		if (Array.isArray(newValue)) {
			setPrice(newValue)
		}
	}

	return (
		<Box sx={{ width: 260 }}>
			<Slider
				value={price}
				onChange={handleChange}
				valueLabelDisplay='auto'
				min={0}
				max={180}
				sx={{
					color: 'black',
					padding: '20px 0',
					'& .MuiSlider-thumb': {
						width: 14,
						height: 4,
						borderRadius: 1,
						backgroundColor: 'black',
						transition: 'none',
						'&:hover, &.Mui-focusVisible, &.Mui-active': {
							boxShadow: 'none',
						},
					},
					'& .MuiSlider-track': {
						height: 4,
						borderRadius: 0,
						backgroundColor: 'black',
					},
					'& .MuiSlider-rail': {
						height: 4,
						borderRadius: 0,
						backgroundColor: '#aaa',
					},
				}}
			/>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Typography className={styles.price} variant='body2' mt={1}>
					Price: ${price[0]} - ${price[1]}
				</Typography>
				<a className={styles.filter} href='!#'>
					Filter
				</a>
			</div>
		</Box>
	)
}

export default PriceSlider
