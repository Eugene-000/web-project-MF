import React from 'react'
import styles from './NotFound.module.scss'

export const NotFound: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <p className={styles.text}>404 - Страница не найдена</p>
      </div>
    </div>
  )
}
