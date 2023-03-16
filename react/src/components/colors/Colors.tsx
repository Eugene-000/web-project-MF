import React from 'react'
import styles from './Colors.module.scss'

interface IProps {
    colors: string[]
}

export const Colors:React.FC<IProps> = ({colors}) => {
  return (
    <div className={styles.colorsSection}>
        <span className={styles.title}>Цвета:</span>
        <div className={styles.colorsContainer}>
            {colors.map(color => (
                <div key={color} style={{background: color}} className={styles.color}></div>
            ))}
        </div>
    </div>
  )
}
