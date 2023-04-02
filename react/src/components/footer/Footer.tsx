import React from 'react'
import styles from './Footer.module.scss'
import logo from '../../assets/images/M&F-orange.png'
import { Link } from 'react-router-dom'
import { PATH_ABOUT, PATH_CART, PATH_PROFILE } from '../../constants/routes'
import inst from '../../assets/images/inst-icon.png'
import face from '../../assets/images/face-icon.png'
import twit from '../../assets/images/twit-icon.png'
import vk from '../../assets/images/vk-icon.png'
import { createCatalogPath } from '../../lib/createPath'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <div className={styles.logoContainer}>
                        <img className={styles.logo} src={logo} alt="Логотип" />
                    </div>
                    <div className={styles.linksContainer}>
                        <ul>
                            <li>
                                <Link className={styles.link} to={createCatalogPath("all")}>Каталог</Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={PATH_PROFILE}>Профиль</Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={PATH_CART}>Корзина</Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={PATH_ABOUT}>О нас</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.lastContainer}>
                    <span className={styles.brand}>© 2022 Men's Fashion</span>
                    <div className={styles.socialIconsContainer}>
                        <a className={styles.socialIconlink} href="#">
                            <img className={styles.socialIcon} src={vk} alt="Вконтакте" />
                        </a>
                        <a className={styles.socialIconlink} href="#">
                            <img className={styles.socialIcon} src={inst} alt="Instagramm" />
                        </a>
                        <a className={styles.socialIconlink} href="#">
                            <img className={styles.socialIcon} src={face} alt="Facebook" />
                        </a>
                        <a className={styles.socialIconlink} href="#">
                            <img className={styles.socialIcon} src={twit} alt="Twitter" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
