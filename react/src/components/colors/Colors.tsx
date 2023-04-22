import React from 'react'
import { ITEM_COLORS } from '../../constants/utils'
import { IColor } from '../../models/items'
import styles from './Colors.module.scss'

interface IProps {
    colors: IColor[],
    title: string,
    selectedColor?: number,
    handleColorClick?: (id: number) => void
    productPage?: boolean,
}

export const Colors:React.FC<IProps> = ({colors, title, selectedColor, handleColorClick, productPage=false}) => {

  const getColor = (colorName: string): string => {
    switch(colorName) {
      case ITEM_COLORS.RED:
        return "#e5000f";
      case ITEM_COLORS.BLUE:
        return "#004de5";
      case ITEM_COLORS.GREEN:
        return "#03c900";
      case ITEM_COLORS.YELLOW:
        return "#e5fa05";
      case ITEM_COLORS.BLACK:
        return "#050505";
      default:
        return "#ffffff";
    }
  }

  return (
    <>
    {productPage && handleColorClick ? (
      <div className={styles.colorsSectionMain}>
        <span className={styles.title}>{title}</span>
        <div className={styles.colorsContainer}>
            {colors.map(color => (
                <div onClick={() => handleColorClick(color.id)} key={color.id} style={{background: getColor(color.name)}} className={[styles.color, selectedColor == color.id ? styles.selected : ""].join(" ")}></div>
            ))}
        </div>
      </div>
    ) : (
      <div className={styles.colorsSection}>
        <span className={styles.title}>{title}</span>
        <div className={styles.colorsContainer}>
            {colors.map(color => (
                <div key={color.id} style={{background: getColor(color.name)}} className={styles.color}></div>
            ))}
        </div>
      </div>
    )}
    </>
  )
}
