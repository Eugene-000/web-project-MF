import React from 'react'
import { ICategory } from '../../../../models/selectList'
import styles from './SelectItem.module.scss'

interface IProps {
    item: ICategory,
    handleClick: (id: number) => void
}

export const SelectItem: React.FC<IProps> = ({ item, handleClick }) => {
    return (
        <span className={styles.item} onClick={() => handleClick(item.id)}>{item.name}</span>
    )
}
