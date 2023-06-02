import React from 'react'
import styles from './About.module.scss'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { AboutHome } from '../home/components/homeMain/components/aboutHome/AboutHome'

export const About: React.FC = () => {
  return (
    <div className={styles.pageRoot}>
      <Header banner={false} />
      <div className={styles.aboutContainer}>
        <AboutHome isMainAbout={true}/>
      </div>
      <Footer />
    </div>
  )
}
