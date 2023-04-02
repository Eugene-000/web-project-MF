import React from 'react'
import { ITEM_COLORS } from '../../constants/utils'
import { IColor } from '../../models/items'
import styles from './Colors.module.scss'

interface IProps {
    colors: IColor[]
}

export const Colors:React.FC<IProps> = ({colors}) => {

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
    <div className={styles.colorsSection}>
        <span className={styles.title}>Цвета:</span>
        <div className={styles.colorsContainer}>
            {colors.map(color => (
                <div key={color.id} style={{background: getColor(color.name)}} className={styles.color}></div>
            ))}
        </div>
    </div>
  )
}
