import React, { useEffect, useState } from 'react'
import { ICategory } from '../../models/selectList';
import { SelectItem } from './components/selectItem/SelectItem';
import styles from './SelectList.module.scss'

interface IProps {
    categories: Array<ICategory>
    handleClickCategory: (id: string, categoryName: string) => void
    selectedCategory: ICategory
}

export const SelectList: React.FC<IProps> = ({ categories, handleClickCategory, selectedCategory }) => {

    const [isVisible, setIsVisible] = useState(false);

    const handleSetVisibleList = () => {
        if (isVisible) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }
      
    return (
        <>
            <div onClick={handleSetVisibleList} className={styles.wrapper}>
                <div className={styles.select}>
                    <div className={[styles.mainContainer, isVisible ? styles.height : styles.staticHeight].join(' ')}>
                        <div className={styles.titleContainer}>
                            <span className={styles.title}>{selectedCategory.name}</span>
                            <div className={[styles.selectIcon, isVisible ? styles.rotate : styles.nonRotate].join(' ')}></div>
                        </div>
                        <div className={[styles.listContainer, isVisible ? styles.visible : styles.hide].join(' ')}>
                            {categories.map((item: ICategory) => (
                                <SelectItem 
                                    item={item} 
                                    handleClick={handleClickCategory} 
                                    key={item.id} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={[styles.mainContainer, styles.listType].join(' ')}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>Категории</span>
                </div>
                <div className={styles.listContainer}>
                    {categories.map((item: ICategory) => (
                        <SelectItem 
                            isSelected={selectedCategory.id === String(item.id)} 
                            item={item} 
                            handleClick={handleClickCategory} 
                            key={item.id} 
                        />
                    ))}
                </div>
            </div>
        </>

    )
}
