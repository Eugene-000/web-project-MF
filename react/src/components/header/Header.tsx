import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PATH_CART, PATH_CATALOG, PATH_HOME, PATH_PROFILE } from '../../constants/routes'
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

export const Header:React.FC<IProps> = ({banner}) => {
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
                            <Link className={styles.link} to={createCatalogPath("all")}>Каталог</Link>
                        </li>
                        <li>
                            <Link className={styles.link} to={PATH_CATALOG}>Услуги</Link>
                        </li>
                        <li>
                            <Link className={styles.link} to={PATH_CATALOG}>Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.logoContainer}>
                    <Link to={PATH_HOME} className={styles.logoLink}>
                        {banner ? (
                            <img className={styles.logo} src={logoOrange} alt="Логотип" />
                        ) : (
                            <img className={styles.logo} src={logoBlack} alt="Логотип" />
                        )}
                    </Link>
                </div>
                <div className={styles.callback}>
                    <Button painted={false} text='Обратная связь' handleClick={() => null}/>
                </div>
                <div className={styles.iconsContainer}>
                    <Link to={PATH_PROFILE} className={styles.iconLink}>
                        <img className={styles.icon} src={profileIcon} alt="Профиль" />
                    </Link>
                    <Link to={PATH_CART} className={styles.iconLink}>
                        <img className={styles.icon} src={cartIcon} alt="Корзина" />
                        <div className={styles.countCartItem}></div>
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
                <Button painted={false} text='Обратная связь' handleClick={() => null}/>  
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
