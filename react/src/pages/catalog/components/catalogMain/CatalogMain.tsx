import React from 'react'
import { MainItem } from '../../../../components/mainItem/MainItem'
import { SelectList } from '../../../../components/selectList/SelectList'
import { IItem } from '../../../../models/items'
import { ICategory } from '../../../../models/selectList'
import styles from './CatalogMain.module.scss'

interface IProps {
    categories : Array<ICategory>
    items: Array<IItem> | null,
    handleClickCategory: (id: string, categoryName: string) => void
    selectedCategory: ICategory
}

export const CatalogMain:React.FC<IProps> = ({categories, items, handleClickCategory, selectedCategory}) => {
  return (
    <div className={styles.main}>
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <span className={styles.title}>Каталог</span>
                <div className={styles.container}>
                    <div className={styles.categoryContainer}>
                        <SelectList 
                            selectedCategory={selectedCategory} 
                            categories={categories} 
                            handleClickCategory={handleClickCategory} 
                        />
                    </div>
                    <div className={styles.cardsContainer}>
                        {items?.map((item) => (
                            <div key={item.id} className={styles.cardContainer}>
                                <MainItem 
                                    item={item} 
                                    key={item.id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
