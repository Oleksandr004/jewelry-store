import AccountSection from '@sections/AccountSection/AccountSection'
import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { getMe } from '@api/auth'
import ProfilePageSection from '@sections/ProfilePageSection/ProfilePageSection'

const AccountPage = () => {
	const { user, setUser } = useAuth()

	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getMe()
			.then((data) => {
				if (data.user) setUser(data.user)
			})
			.finally(() => setIsLoading(false))
	}, [])

	if (isLoading) return <p>Loading...</p>

	if (!user) return <AccountSection />

	return <ProfilePageSection />
}

export default AccountPage
