import React from 'react'
import { Colors } from '../colors/Colors'
import { Sizes } from '../sizes/Sizes'
import styles from './MainItem.module.scss'
import { IItem } from '../../models/items'
import { Link } from 'react-router-dom'
import { PATH_PRODUCT, SERVER_URL } from '../../constants/routes'
import { formattedPrice } from '../../utils/priceFormat'


interface IProps {
    item: IItem
}

export const MainItem:React.FC<IProps> = ({item}) => {

    const createProductPath = (category_id: number, product_id: number) => PATH_PRODUCT.replace(':category_id', String(category_id)).replace(':product_id', String(product_id));

  return (
    <Link className={styles.container} to={createProductPath(item.category_id, item.id)}>
        <div className={styles.imgContainer}>
            <img src={`${SERVER_URL}${item.image}`} className={styles.image} alt="Изображение" />
        </div>
        <div className={styles.infoContainer}>
            <span className={styles.name}>{item.name}</span>
            <Colors colors={item.colors} title='Цвета:'/>
            <Sizes sizes={item.sizes} title='Размеры:'/>
            <div className={styles.priceSection}>
                <span className={styles.title}>Цена:</span>
                <span className={styles.price}>{formattedPrice(item.price)}</span>
            </div>
        </div>
    </Link>
  )
}
