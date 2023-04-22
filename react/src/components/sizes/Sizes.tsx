import React from 'react'
import { ISize } from '../../models/items'
import styles from './Sizes.module.scss'

interface IProps {
    sizes: ISize[],
    title: string,
    selectedSize?: number,
    handleSizeClick?: (id: number) => void
    productPage?: boolean,
}

export const Sizes:React.FC<IProps> = ({sizes, title, handleSizeClick, selectedSize, productPage = false}) => {
  return (
    <>
      {productPage && handleSizeClick ? (
        <div className={styles.sizesSectionMain}>
          <span className={styles.title}>{title}</span>
          <div className={styles.sizesContainer}>
            {sizes.map(size => (
                <span onClick={() => handleSizeClick(size.id)} key={size.id} className={[styles.size, selectedSize == size.id ? styles.selected : ""].join(" ")}>{size.name}</span>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.sizesSection}>
          <span className={styles.title}>{title}</span>
          <div className={styles.sizesContainer}>
            {sizes.map(size => (
                <span key={size.id} className={styles.size}>{size.name}</span>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
