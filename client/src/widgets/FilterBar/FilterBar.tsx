import styles from '@widgets/FilterBar/FilterBar.module.scss'
import searchIcon from '@assets/icons/search.png'
import CustomSwitch from '@components/CustomSwitch/CustomSwitch'
import CustomSelect from '@components/CustomSelect/CustomSelect'
import PriceSlider from '@components/PriceSlider/PriceSlider'

const FilterBar = () => {
	return (
		<div className={styles.container}>
			<aside>
				<div style={{ position: 'relative' }}>
					<input
						className={styles.search_input}
						type='text'
						placeholder='Search...'
					/>
					<a href='#!'>
						<img
							className={styles.search_img}
							src={searchIcon}
							alt='search icon'
						/>
					</a>
					<div className={styles.line} />
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 16,
					}}
				>
					<CustomSelect
						label='Shop By'
						options={[
							{ value: 'chairs', label: 'Chairs' },
							{ value: 'tables', label: 'Tables' },
							{ value: 'sofas', label: 'Sofas' },
							{ value: 'lamps', label: 'Lamps' },
						]}
					/>
					<CustomSelect
						label='Sort By'
						options={[
							{ value: 'price_asc', label: 'Price: Low to High' },
							{ value: 'price_desc', label: 'Price: High to Low' },
							{ value: 'newest', label: 'Newest First' },
							{ value: 'rating_desc', label: 'Rating: High to Low' },
						]}
					/>
					<PriceSlider />
					<div className={styles.switch_section}>
						<p className={styles.title}>On sale</p>
						<CustomSwitch />
					</div>
					<div className={styles.switch_section}>
						<p className={styles.title}>In stock</p>
						<CustomSwitch />
					</div>
				</div>
			</aside>
		</div>
	)
}

export default FilterBar
