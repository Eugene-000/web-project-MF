import React from 'react'
import { Link } from 'react-router-dom'
import { createCatalogPath } from '../../../../lib/createPath'
import { ICategory } from '../../../../models/selectList'
import styles from './SelectItem.module.scss'

interface IProps {
    item: ICategory,
    handleClick: (id: string, categoryName: string) => void
    isSelected?: boolean
}

export const SelectItem: React.FC<IProps> = ({ item, handleClick, isSelected }) => {
    return (
        <Link 
            to={createCatalogPath(String(item.id))} 
            className={[styles.item, isSelected ? styles.selected : ''].join(' ')} 
            onClick={() => handleClick(String(item.id), item.name)}
        >
        {item.name}
        </Link>
    )
}
