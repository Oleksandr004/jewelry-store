import styles from '@sections/ProductDetailsTabs/Description/Description.module.scss'

type Props = {
	desc: string
}

const Description = ({ desc }: Props) => {
	return <p className={styles.text}>{desc}</p>
}

export default Description
