import React from 'react'
import styles from './Footer.module.scss'
import logo from '../../assets/images/M&F-orange.png'
import { Link } from 'react-router-dom'
import { PATH_CATALOG } from '../../constants/routes'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Логотип" />
                </div>
                <div className={styles.linksContainer}>
                    <ul>
                        <li>
                            <Link className={styles.link} to={PATH_CATALOG}>Каталог</Link>
                        </li>
                        <li>
                            <Link className={styles.link} to={PATH_CATALOG}>Профиль</Link>
                        </li>
                        <li>
                            <Link className={styles.link} to={PATH_CATALOG}>Корзина</Link>
                        </li>
                        <li>
                            <Link className={styles.link} to={PATH_CATALOG}>О нас</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.lastContainer}>
                    <span className={styles.brand}>© 2022 Men's Fashion</span>
                    <div className={styles.socialIconsContainer}>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
