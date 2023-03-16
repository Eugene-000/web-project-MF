import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { MainProfile } from './components/mainProfile/MainProfile'

export const Profile: React.FC = () => {
  return (
    <>
      <Header banner={false} />
      <MainProfile />
      <Footer />
    </>
  )
}
