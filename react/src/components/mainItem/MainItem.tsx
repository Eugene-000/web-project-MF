import React from 'react'
import { Colors } from '../colors/Colors'
import { Sizes } from '../sizes/Sizes'
import styles from './MainItem.module.scss'
import foto from '../../assets/images/product-image.png'
import { IItem } from '../../models/items'
import { Link } from 'react-router-dom'
import { PATH_PRODUCT } from '../../constants/routes'


interface IProps {
    item: IItem
}

export const MainItem:React.FC<IProps> = ({item}) => {

    const createProductPath = (category_id: number, product_id: number) => PATH_PRODUCT.replace(':category_id', String(category_id)).replace(':product_id', String(product_id));

  return (
    <Link className={styles.container} to={createProductPath(item.category_id, item.id)}>
        <div className={styles.imgContainer}>
            <img src={foto} className={styles.image} alt="Изображение" />
        </div>
        <div className={styles.infoContainer}>
            <span className={styles.name}>{item.name}</span>
            <Colors colors={item.colors}/>
            <Sizes sizes={item.sizes}/>
            <div className={styles.priceSection}>
                <span className={styles.title}>Цена:</span>
                <span className={styles.price}>{item.price} ₽</span>
            </div>
        </div>
    </Link>
  )
}
