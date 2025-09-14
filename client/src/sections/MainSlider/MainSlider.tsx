import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import sliderImg from '@assets/slide-img.png'
import styles from '@sections/MainSlider/MainSlider.module.scss'
import { Link } from 'react-router-dom'

const images = [
	sliderImg,
	sliderImg,
	sliderImg,
	sliderImg,
	sliderImg,
	sliderImg,
]

const Slide = ({ src }: { src: string }) => (
	<div>
		<img src={src} alt='' />
		<p className={styles.title}>Gold big hoops </p>
		<p className={styles.subtitle}>$ 68,00</p>
		<Link className={styles.btn} to='/'>
			View Product
		</Link>
	</div>
)

const MainSlider = () => {
	return (
		<div className={styles.container}>
			<Swiper
				modules={[Autoplay, Pagination]}
				autoplay={{ delay: 3000 }}
				pagination={{ clickable: true }}
				loop={true}
				slidesPerView={1}
			>
				{images.map((imgSrc, index) => (
					<SwiperSlide key={index}>
						<Slide src={imgSrc} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default MainSlider
