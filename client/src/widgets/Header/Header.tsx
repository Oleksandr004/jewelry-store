import logo from '@assets/logo.svg'
import searchIcon from '@assets/icons/search.svg'
import cartIcon from '@assets/icons/cart.svg'
import accountIcon from '@assets/icons/account.svg'
import closeBurgerBtn from '@assets/icons/close-burger.svg'
import logOutIcon from '@assets/icons/logout.svg'
import myAccoutIcon from '@assets/icons/my-account.svg'

import styles from '@widgets/Header/Header.module.scss'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import CartSidebar from '@widgets/CartSidebar/CartSidebar'

import { logout } from '@api/auth'
import { useAuth } from '../../context/AuthContext'

const Header = () => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false)

	const { user, setUser } = useAuth()

	const handleLogOut = () => {
		if (confirm('Are you sure you want to log out of your account?')) {
			logout()
			setUser(null)
			setIsOpenBurgerMenu(false)
		}
	}

	return (
		<>
			<div className={styles.container}>
				<header className={styles.header}>
					<Link to='/'>
						<img style={{ userSelect: 'none' }} src={logo} alt='Logo img' />
					</Link>
					<nav style={{ display: 'flex', alignItems: 'center' }}>
						<div className={styles.links_row}>
							<Link to='/shop'>Shop</Link>
							<Link to='/blog'>Blog</Link>
							<Link to='/story'>Our Story</Link>
						</div>
						<div className={styles.line} />
						<div className={styles.icons_row}>
							<Link className={styles.search_icon} to='/shop'>
								<img src={searchIcon} alt='search icon' />
							</Link>
							<div
								onClick={() => {
									setIsCartOpen(true)
								}}
								style={{ cursor: 'pointer' }}
							>
								<img src={cartIcon} alt='cart icon' />
							</div>
							<div
								onClick={() => setIsOpenBurgerMenu(true)}
								className={styles.burger_btn}
							>
								<span />
								<span />
								<span />
							</div>
							<Link className={styles.account_icon} to='/account'>
								<img src={accountIcon} alt='account icon' />
							</Link>
						</div>
					</nav>
				</header>
				{isOpenBurgerMenu && (
					<div className={styles.burger_menu}>
						<div className={styles.container_burger}>
							<div className={styles.burger_header}>
								<img src={logo} alt='logo img' />
								<div>
									<img src={cartIcon} alt='cart icon' />
									<img
										onClick={() => setIsOpenBurgerMenu(false)}
										src={closeBurgerBtn}
										alt='close burger menu icon'
									/>
								</div>
							</div>
							<div className={styles.search}>
								<img src={searchIcon} alt='search icon' />
								<p>Search</p>
							</div>
							<nav className={styles.burger_nav}>
								<Link to='/' onClick={() => setIsOpenBurgerMenu(false)}>
									Home
								</Link>
								<Link to='/shop' onClick={() => setIsOpenBurgerMenu(false)}>
									Shop
								</Link>
								<Link to='/story' onClick={() => setIsOpenBurgerMenu(false)}>
									About
								</Link>
								<Link to='/blog' onClick={() => setIsOpenBurgerMenu(false)}>
									Blog
								</Link>
								<Link to='/story' onClick={() => setIsOpenBurgerMenu(false)}>
									Help
								</Link>
								<Link to='/contact' onClick={() => setIsOpenBurgerMenu(false)}>
									Contact
								</Link>
								<Link to='/story' onClick={() => setIsOpenBurgerMenu(false)}>
									Search
								</Link>
							</nav>
							<div className={styles.line} />
							<nav>
								<Link
									to='/account'
									onClick={() => setIsOpenBurgerMenu(false)}
									className={styles.my_account}
								>
									<img src={myAccoutIcon} alt='my account icon' />
									<p>My account</p>
								</Link>
								{user && (
									<a onClick={handleLogOut} className={styles.logout}>
										<img src={logOutIcon} alt='logout icon' />
										<p>Logout</p>
									</a>
								)}
							</nav>
						</div>
					</div>
				)}
				<div className={styles.line} />
			</div>
			{isCartOpen && <CartSidebar />}
		</>
	)
}

export default Header
