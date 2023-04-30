import React, { useEffect, useState } from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { MainProfile } from './components/mainProfile/MainProfile'
import { useActions } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const Profile: React.FC = () => {
  const {setAuthToken, setAuthUser} = useActions();
  const {user, error, isLoading} = useTypedSelector(state => state.user);
  const {getUser} = useActions();
  const [userId, setUserID] = useState(localStorage.getItem('USER_ID'));

  useEffect(() => {
    if (userId) {
      getUser(userId);
    }
  }, [])

  const handleLogout = () => {
    setAuthToken(null)
    setAuthUser(null)
  }
  return (
    <>
      <Header banner={false} />
      <MainProfile handleLogout={handleLogout} user={user}/>
      <Footer />
    </>
  )
}
