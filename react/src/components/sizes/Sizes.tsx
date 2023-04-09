import React from 'react'
import { ISize } from '../../models/items'
import styles from './Sizes.module.scss'

interface IProps {
    sizes: ISize[],
    title: string
}

export const Sizes:React.FC<IProps> = ({sizes, title}) => {
  return (
    <div className={styles.sizesSection}>
        <span className={styles.title}>{title}</span>
        <div className={styles.sizesContainer}>
            {sizes.map(size => (
                <span key={size.id} className={styles.size}>{size.name}</span>
            ))}
        </div>
    </div>
  )
}
