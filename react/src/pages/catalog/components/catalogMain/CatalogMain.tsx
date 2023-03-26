import React from 'react'
import { MainItem } from '../../../../components/mainItem/MainItem'
import { SelectList } from '../../../../components/selectList/SelectList'
import { IItem } from '../../../../models/items'
import styles from './CatalogMain.module.scss'

interface IProps {
    items: Array<IItem> | null,
    handleClickCategory: (id: number) => void
}

export const CatalogMain:React.FC<IProps> = ({items, handleClickCategory}) => {
  return (
    <div className={styles.main}>
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <span className={styles.title}>Каталог</span>
                <div className={styles.container}>
                    <div className={styles.categoryContainer}>
                        <SelectList handleClickCategory={handleClickCategory}/>
                    </div>
                    <div className={styles.cardsContainer}>
                        {items?.map((item) => (
                            <div className={styles.cardContainer}>
                                <MainItem item={item} key={item.id}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
