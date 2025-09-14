import styles from '@sections/ProductDetailsTabs/AdditionalInfo/AdditionalInfo.module.scss'

type Props = {
	weight: number
	colours: string[]
	material: string
	dimentions: string | null
}

const AdditionalInfo = ({ weight, colours, material, dimentions }: Props) => {
	return (
		<div className={styles.list}>
			<p>
				<span>Weight:</span> {weight} kg
			</p>
			<p>
				<span>Dimentions:</span> {dimentions}
			</p>
			<p>
				<span>Colours:</span> {colours.join(', ')}
			</p>
			<p>
				<span>Material:</span> {material}
			</p>
		</div>
	)
}

export default AdditionalInfo
