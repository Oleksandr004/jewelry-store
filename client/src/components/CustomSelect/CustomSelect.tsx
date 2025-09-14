import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { useState, type ChangeEvent } from 'react'

type Option = {
	value: string
	label: string
}

type Props = {
	label: string
	options: Option[]
	onChange?: (value: string) => void
	defaultValue?: string
}

const CustomSelect = ({
	label,
	options,
	onChange,
	defaultValue = '',
}: Props) => {
	const [value, setValue] = useState(defaultValue)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		onChange?.(event.target.value)
	}

	return (
		<FormControl sx={{ width: 261 }}>
			<InputLabel id={`${label}-label`}>{label}</InputLabel>
			<Select
				labelId={`${label}-label`}
				id={`${label}-select`}
				value={value}
				label={label}
				onChange={() => handleChange}
			>
				{options.map((opt) => (
					<MenuItem key={opt.value} value={opt.value}>
						{opt.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default CustomSelect
