import styles from '@components/PaginationControlsBtn/PaginationControlsBtn.module.scss'

type Props = {
	page: number
	isActive: boolean
	onClick: () => void
}

const PaginationControlsBtn = ({ isActive, onClick, page }: Props) => {
	return (
		<button
			className={`${styles.btn} ${isActive && styles.active}`}
			onClick={onClick}
		>
			{page}
		</button>
	)
}

export default PaginationControlsBtn
