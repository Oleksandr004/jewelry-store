import styles from '@components/BlackBtn/BlackBtn.module.scss'

type Prop = {
	text: string
	marginBottom: number
	width?: string
	centered?: boolean
	children?: React.ReactNode
}

const BlackBtn = ({
	text,
	marginBottom,
	width = '100%',
	centered = true,
}: Prop) => {
	return (
		<button
			type='submit'
			style={{
				marginBottom,
				width: width,
				margin: centered ? '0 auto' : undefined,
			}}
			className={styles.btn}
		>
			<a className={styles.btn_text}>{text}</a>
		</button>
	)
}

export default BlackBtn
