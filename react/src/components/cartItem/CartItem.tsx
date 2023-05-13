import React from 'react';
import styles from './CartItem.module.scss';
import { ICartItem } from '../../models/cart';
import { SERVER_URL } from '../../constants/routes';
import { Sizes } from '../sizes/Sizes';
import { Colors } from '../colors/Colors';
import { Counter } from '../counter/Counter';
import { Button } from '../button/Button';
import { formattedPrice } from '../../utils/priceFormat';

interface IProps {
    cartItem: ICartItem;
    handleAddCartItemCountClick: (id: number, quantity: number) => void,
    handleRemoveCartItemCountClick: (id: number, quantity: number) => void,
    handleRemoveCartItemClick: (id: number) => void,
}

export const CartItem: React.FC<IProps> = ({cartItem, handleAddCartItemCountClick, handleRemoveCartItemCountClick, handleRemoveCartItemClick}) => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <img className={styles.img} src={SERVER_URL + cartItem.product.image} alt={cartItem.product.name} />
        </div>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <span className={styles.title}>{cartItem.product.name}</span>
                <Sizes title='Размер:' sizes={cartItem.size}/>
                <Colors title='Цвет:' colors={cartItem.color}/>
                <Counter 
                    handleAddClick={() => handleAddCartItemCountClick(cartItem.id, cartItem.quantity)}
                    handleRemoveClick={() => handleRemoveCartItemCountClick(cartItem.id, cartItem.quantity)}
                    count={cartItem.quantity}
                />
            </div>
            <div className={styles.priceContainer}>
                <span className={styles.price}>{formattedPrice(cartItem.product.price * cartItem.quantity)}</span>
                <div className={styles.removeBtnContainer}>
                    <Button painted={false} text='Удалить' handleClick={() => handleRemoveCartItemClick(cartItem.id)}/>
                </div>
            </div>
        </div>
    </div>
  )
}
