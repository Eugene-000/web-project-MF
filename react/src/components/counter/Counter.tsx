import React from 'react'
import styles from './Counter.module.scss'

interface ICounter {
  count: number,
  handleAddClick: () => void,
  handleRemoveClick: () => void,
  direction?: string
}
export const Counter: React.FC<ICounter> = ({count, handleAddClick, handleRemoveClick, direction = "column"}) => {
  return (
    <div className={[styles.countSection, direction === "row" ? styles.row : styles.coloum].join(" ")}>
      <span className={styles.title}>Количество:</span>
      <div className={styles.container}>
        <button onClick={handleAddClick} className={styles.btn}>+</button>
        <span className={styles.count}>{count}</span>
        <button onClick={handleRemoveClick} className={styles.btn}>-</button>
      </div>
    </div>
  )
}
