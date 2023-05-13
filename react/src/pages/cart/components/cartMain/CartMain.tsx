import React from 'react'
import styles from './CartMain.module.scss'
import { ICartItem } from '../../../../models/cart'
import { CartItemsList } from './components/cartItemsList/CartItemsList'
import { CartForm } from './components/cartForm/CartForm'
import { IUser } from '../../../../models/user'

interface IProps {
  cartItems: Array<ICartItem> | null,
  handleAddCartItemCountClick: (id: number, quantity: number) => void,
  handleRemoveCartItemCountClick: (id: number, quantity: number) => void,
  handleRemoveCartItemClick: (id: number) => void,
  totalPrice: number,
  user: IUser | null
}

export const CartMain:React.FC<IProps> = (
  {
    cartItems, 
    handleAddCartItemCountClick, 
    handleRemoveCartItemCountClick, 
    handleRemoveCartItemClick,
    totalPrice,
    user
  }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Корзина</span>
      <CartItemsList 
        cartItems={cartItems} 
        handleAddCartItemCountClick={handleAddCartItemCountClick} 
        handleRemoveCartItemCountClick={handleRemoveCartItemCountClick}
        handleRemoveCartItemClick={handleRemoveCartItemClick}
      />
      <CartForm totalPrice={totalPrice} user={user}/>
    </div>
  )
}
