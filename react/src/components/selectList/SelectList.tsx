import React, { useState } from 'react'
import { ICategory } from '../../models/selectList';
import { SelectItem } from './components/selectItem/SelectItem';
import styles from './SelectList.module.scss'

interface IProps {
    handleClickCategory: (id: number) => void
}

export const SelectList: React.FC<IProps> = ({ handleClickCategory }) => {

    const [isVisible, setIsVisible] = useState(false);

    const handleSetVisibleList = () => {
        if (isVisible) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }

    const categoryList: ICategory[] = [
        {
            id: 1,
            name: "Верхняя одежда",
        },
        {
            id: 2,
            name: "Спортивная одежда",
        },
        {
            id: 3,
            name: "Толстовки и свитшоты",
        },
        {
            id: 4,
            name: "Джинсы и брюки",
        },
        {
            id: 5,
            name: "Рубашки и футболки",
        },
        {
            id: 6,
            name: "Обувь",
        },
    ];
    return (
        <>
            <div onClick={handleSetVisibleList} className={styles.wrapper}>
                <div className={styles.select}>
                    <div className={[styles.mainContainer, isVisible ? styles.height : styles.staticHeight].join(' ')}>
                        <div className={styles.titleContainer}>
                            <span className={styles.title}>Категории</span>
                            <div className={[styles.selectIcon, isVisible ? styles.rotate : styles.nonRotate].join(' ')}></div>
                        </div>
                        <div className={[styles.listContainer, isVisible ? styles.visible : styles.hide].join(' ')}>
                            {categoryList.map((item: ICategory) => (
                                <SelectItem item={item} handleClick={handleClickCategory} key={item.id} />
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
                    {categoryList.map((item: ICategory) => (
                        <SelectItem item={item} handleClick={handleClickCategory} key={item.id} />
                    ))}
                </div>
            </div>
        </>

    )
}
