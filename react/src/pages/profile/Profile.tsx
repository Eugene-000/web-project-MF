import React, { useEffect, useState } from 'react'
import styles from './Profile.module.scss'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { MainProfile } from './components/mainProfile/MainProfile'
import { useActions } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Loader } from '../../components/loader/Loader'

export const Profile: React.FC = () => {
  const {setAuthToken, setAuthUser} = useActions();
  const {user, error, isLoading} = useTypedSelector(state => state.user);
  const {getUser} = useActions();
  const [userId, setUserID] = useState(localStorage.getItem('USER_ID'));
  const [isUpdate, seIsUpdate] = useState(false);

  useEffect(() => {
    if (userId) {
      getUser(userId);
    }
  }, [userId])

  const handleLogout = () => {
    setAuthToken(null)
    setAuthUser(null)
  }
  
  return (
    <div className={styles.pageRoot}>
      {isLoading && <Loader />}
      <Header banner={false} />
      <MainProfile handleLogout={handleLogout} user={user}/>
      <Footer />
    </div>
  )
}
