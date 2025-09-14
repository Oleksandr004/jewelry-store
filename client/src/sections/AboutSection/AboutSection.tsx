import styles from '@sections/AboutSection/AboutSection.module.scss'
import TopTrendsImg from '@assets/TopTrendsImg.png'
import ProducedImg from '@assets/ProducedImg.png'

const AboutSection = () => {
	return (
		<div className={styles.container}>
			<section className={styles.about_section}>
				<h2 className={styles.title}>About</h2>
				<p className={styles.subtitle}>Who we are and why we do what we do!</p>
				<p>
					Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
					sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
					pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
					et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
					lacus, ac sodales lectus placerat quis.{' '}
				</p>
				<p className={styles.trends_title}>Top trends</p>
				<img
					className={styles.trends_img}
					src={TopTrendsImg}
					alt='top trends img'
				/>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
					maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
					consequat sed eu felis.
				</p>
				<ul className={styles.list}>
					<p>● consectetur adipiscing elit. Aliquam placerat</p>
					<p>● Lorem ipsum dolor sit amet consectetur </p>
				</ul>
				<p className={styles.produced_title}>Produced with care</p>
				<img
					className={styles.produced_img}
					src={ProducedImg}
					alt='top trends img'
				/>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
					maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
					consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
					in molestie diam bibendu.
				</p>
			</section>
		</div>
	)
}

export default AboutSection
