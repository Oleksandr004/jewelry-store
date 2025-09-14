import { Switch } from '@mui/material'

export default function CustomSwitch() {
	return (
		<Switch
			defaultChecked={false}
			sx={{
				width: 33,
				height: 20,
				padding: 0,
				'& .MuiSwitch-switchBase': {
					padding: 1,
					transform: 'translate(-3px, -4px)',

					'&.Mui-checked': {
						transform: 'translate(7px, -4px)',
						color: '#fff',
						'& + .MuiSwitch-track': {
							backgroundColor: '#888',
							opacity: 1,
						},
					},
				},
				'& .MuiSwitch-thumb': {
					backgroundColor: '#fff',
					width: 13.33,
					height: 13.33,
				},
				'& .MuiSwitch-track': {
					borderRadius: 50,
					backgroundColor: 'rgb(112, 112, 112)',
					opacity: 1,
				},
			}}
		/>
	)
}
