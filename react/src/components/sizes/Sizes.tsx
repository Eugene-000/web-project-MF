import React from 'react'
import styles from './Sizes.module.scss'

interface IProps {
    sizes: string[]
}

export const Sizes:React.FC<IProps> = ({sizes}) => {
  return (
    <div className={styles.sizesSection}>
        <span className={styles.title}>Размеры:</span>
        <div className={styles.sizesContainer}>
            {sizes.map(size => (
                <span key={size} className={styles.size}>{size}</span>
            ))}
        </div>
    </div>
  )
}
