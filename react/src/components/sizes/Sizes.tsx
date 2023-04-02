import React from 'react'
import { ISize } from '../../models/items'
import styles from './Sizes.module.scss'

interface IProps {
    sizes: ISize[]
}

export const Sizes:React.FC<IProps> = ({sizes}) => {
  return (
    <div className={styles.sizesSection}>
        <span className={styles.title}>Размеры:</span>
        <div className={styles.sizesContainer}>
            {sizes.map(size => (
                <span key={size.id} className={styles.size}>{size.name}</span>
            ))}
        </div>
    </div>
  )
}
