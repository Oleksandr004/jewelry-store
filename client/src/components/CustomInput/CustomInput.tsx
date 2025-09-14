import styles from '@components/CustomInput/CustomInput.module.scss'
type Props = {
	placeholder: string
	width: number
	height: number
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onBlur?: () => void
	name?: string
}
const CustomInput = ({
	placeholder,
	width,
	height,
	value,
	onChange,
	onBlur,
	name,
	fullWidth = false, // новый пропс
}: Props & { fullWidth?: boolean }) => {
	return (
		<input
			placeholder={placeholder}
			style={{
				width: fullWidth ? '100%' : width,
				maxWidth: fullWidth ? '100%' : width,
				height,
			}}
			className={styles.textarea}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			name={name}
		/>
	)
}
export default CustomInput
