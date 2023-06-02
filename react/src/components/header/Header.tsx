import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PATH_ABOUT, PATH_CART, PATH_CATALOG, PATH_HOME, PATH_NOT_FOUND, PATH_PROFILE } from '../../constants/routes'
import { Button } from '../button/Button'
import styles from './Header.module.scss'
import logoOrange from '../../assets/images/M&F-orange.png'
import logoBlack from '../../assets/images/M&F-black.png'
import profileIcon from '../../assets/images/profile-icon.png'
import cartIcon from '../../assets/images/cart-icon.png'
import { createCatalogPath } from '../../lib/createPath'

interface IProps {
    banner: boolean;
}

export const Header: React.FC<IProps> = ({ banner }) => {
    const [visibleMenu, setVisibleMenu] = useState(false)

    const handleBurgerMenu = (): void => {
        visibleMenu ? setVisibleMenu(false) : setVisibleMenu(true);
    }

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={[styles.mainContainer, banner && styles.margin].join(' ')}>
                    <button onClick={handleBurgerMenu} type='button' className={styles.burgerBtn}></button>
                    <div className={styles.navbar}>
                        <ul>
                            <li>
                                <Link className={styles.link} to={PATH_HOME}>Главная</Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={createCatalogPath("all")}>Каталог</Link>
                            </li>
                            <li>
                                <Link className={styles.link} to={PATH_ABOUT}>О нас</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.logoContainer}>
                        <Link to={PATH_HOME} className={styles.logoLink}>
                            {!banner ? (
                                <img className={styles.logo} src={logoOrange} alt="Логотип" />
                            ) : (
                                <img className={styles.logo} src={logoBlack} alt="Логотип" />
                            )}
                        </Link>
                    </div>
                    <div className={styles.callback}>
                        <a href="tel:+79170601562">
                            <Button painted={false} text='Обратная связь' handleClick={() => null} />
                        </a>
                    </div>
                    <div className={styles.iconsContainer}>
                        <Link to={PATH_CART} className={styles.iconLink}>
                            <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5" y="7" width="14" height="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {/* <img className={styles.icon} src={cartIcon} alt="Корзина" />
                        <div className={styles.countCartItem}></div> */}
                        </Link>
                        <Link to={PATH_PROFILE} className={styles.iconLink}>
                            <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 19.5C5.5 19.5 9 18 10 17C11 16 8 16 8 11C8 6 12 6 12 6C12 6 16 6 16 11C16 16 13 16 14 17C15 18 18.5 19.5 18.5 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" />
                            </svg>
                            {/* <img className={styles.icon} src={profileIcon} alt="Профиль" /> */}
                        </Link>
                    </div>
                </div>
                <div className={[styles.burgerMenu, visibleMenu ? styles.visible : styles.hide].join(' ')}>
                    <div className={styles.burgerNavbar}>
                        <ul>
                            <li>
                                <Link className={styles.burgerLink} to={createCatalogPath("all")}>Каталог</Link>
                            </li>
                            <li>
                                <Link className={styles.burgerLink} to={PATH_CATALOG}>Услуги</Link>
                            </li>
                            <li>
                                <Link className={styles.burgerLink} to={PATH_CATALOG}>Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <a href="tel:+79170601562">
                        <Button painted={false} text='Обратная связь' handleClick={() => null} />
                    </a>
                </div>
                {banner &&
                    <div className={styles.bannerContainer}>
                        <div className={styles.bannerImage}></div>
                        <div className={styles.bannerTextContainer}>
                            <span className={styles.bannerMainText}>Men’s Fashion 2022</span>
                            <span className={styles.bannerSmallText}>Поступление новой коллекции!</span>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}
