import React from 'react'
import styles from './ProductMain.module.scss'
import { Sizes } from '../../../../components/sizes/Sizes'
import { Colors } from '../../../../components/colors/Colors'

export const ProductMain = () => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.title}></span>
        <div className={styles.mainContainer}>
            <div className={styles.imgContainer}>
                <img src="" className={styles.productImage} alt="" />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.sizeContainer}>
                    <Sizes title='Выберете размер:'/>
                </div>
                <div className={styles.colorContainer}>
                    <Colors title='Выберете цвет:'/>
                </div>
                <div className={styles.countContainer}>
                    {/* <Counter /> */}
                </div>
            </div>
        </div>
        <div className={styles.descriptionContainer}>
            <span className={styles.descriptionTitle}>О товаре</span>
            <p className={styles.description}></p>
        </div>
    </div>
  )
}
