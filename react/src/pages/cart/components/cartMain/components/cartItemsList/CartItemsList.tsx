import React from 'react';
import styles from './CartItemsList.module.scss';
import { ICartItem } from '../../../../../../models/cart';
import { CartItem } from '../../../../../../components/cartItem/CartItem';
import { Button } from '../../../../../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import { createCatalogPath } from '../../../../../../lib/createPath';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';

interface IProps {
  cartItems: Array<ICartItem> | null,
  handleAddCartItemCountClick: (id: number, quantity: number) => void,
  handleRemoveCartItemCountClick: (id: number, quantity: number) => void,
  handleRemoveCartItemClick: (id: number) => void,
}

export const CartItemsList: React.FC<IProps> = (
  {
    cartItems,
    handleAddCartItemCountClick,
    handleRemoveCartItemCountClick,
    handleRemoveCartItemClick
  }) => {

  const navigate = useNavigate();

  const handleBtnClick = (): void => {
    navigate(createCatalogPath("all"));
  }

  return (
    <div className={styles.container}>
      {!cartItems?.length &&
        <div className={styles.noItem}>
          <p className={styles.noItemText}>Продукты в корзине отсутствуют!</p>
          <div className={styles.btnContainer}>
            <Button text='Перейти в каталог' icon='arrow' handleClick={handleBtnClick} painted={false} />
          </div>
        </div>
      }
      {cartItems && cartItems.map(cartItem => (
        <div className={styles.itemContainer} key={cartItem.id}>
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            handleAddCartItemCountClick={handleAddCartItemCountClick}
            handleRemoveCartItemCountClick={handleRemoveCartItemCountClick}
            handleRemoveCartItemClick={handleRemoveCartItemClick}
          />
        </div>
      ))}
    </div>
  )
}
