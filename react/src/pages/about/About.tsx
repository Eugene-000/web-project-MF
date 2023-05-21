import React from 'react'
import styles from './About.module.scss'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

export const About:React.FC = () => {
  return (
    <div className={styles.pageRoot}>
      <Header banner={false} />
      
      <Footer />
    </div>
  )
}
