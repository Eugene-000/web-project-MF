import React from 'react'
import styles from './Button.module.scss'

interface IProps {
    icon?: "arrow" | "cart"
    painted: boolean;
    text: string;
    type?: "button" | "submit" | "reset";
    handleClick: () => void
}

export const Button: React.FC<IProps> = ({icon, painted, text, type, handleClick}) => {
  return (
    <>
    {icon ? (
      <button 
        onClick={handleClick} 
        className={[
          styles.btn,
          (icon === "arrow") ? styles.arrow : styles.cart,
        ].join(' ')} 
        type={type}>
      {text}
      </button>
    ) : (
      <button 
        onClick={handleClick} 
        className={[
          styles.btn, 
          painted ? styles.painted : styles.nonPainted
        ].join(' ')} 
        type={type}>
      {text}
      </button>
    )}
    </>
  )
}
