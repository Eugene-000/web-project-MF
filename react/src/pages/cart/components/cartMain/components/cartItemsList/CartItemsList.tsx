import React from 'react';
import styles from './CartItemsList.module.scss';
import { ICartItem } from '../../../../../../models/cart';
import { CartItem } from '../../../../../../components/cartItem/CartItem';

interface IProps {
  cartItems: Array<ICartItem> | null,
  handleAddCartItemCountClick: (id: number, quantity: number) => void,
  handleRemoveCartItemCountClick: (id: number, quantity: number) => void,
  handleRemoveCartItemClick: (id: number) => void,
}

export const CartItemsList:React.FC<IProps> = (
  {
    cartItems, 
    handleAddCartItemCountClick, 
    handleRemoveCartItemCountClick, 
    handleRemoveCartItemClick
  }) => {
  return (
    <>
      {cartItems && cartItems.map(cartItem => (
        <CartItem 
          key={cartItem.id} 
          cartItem={cartItem} 
          handleAddCartItemCountClick={handleAddCartItemCountClick} 
          handleRemoveCartItemCountClick={handleRemoveCartItemCountClick} 
          handleRemoveCartItemClick={handleRemoveCartItemClick}
        />
      ))}
    </>
  )
}
