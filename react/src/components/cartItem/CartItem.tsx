import React from 'react';
import styles from './CartItem.module.scss';
import { ICartItem } from '../../models/cart';
import { PATH_PRODUCT, SERVER_URL } from '../../constants/routes';
import { Sizes } from '../sizes/Sizes';
import { Colors } from '../colors/Colors';
import { Counter } from '../counter/Counter';
import { Button } from '../button/Button';
import { formattedPrice } from '../../utils/priceFormat';
import { Link } from 'react-router-dom';

interface IProps {
    cartItem: ICartItem;
    handleAddCartItemCountClick: (id: number, quantity: number) => void,
    handleRemoveCartItemCountClick: (id: number, quantity: number) => void,
    handleRemoveCartItemClick: (id: number) => void,
}

export const CartItem: React.FC<IProps> = (
    {
        cartItem,
        handleAddCartItemCountClick,
        handleRemoveCartItemCountClick,
        handleRemoveCartItemClick
    }) => {

    const createProductPath = (category_id: number, product_id: number) => PATH_PRODUCT.replace(':category_id', String(category_id)).replace(':product_id', String(product_id));

    return (
        <div className={styles.container} >
            <Link className={styles.imgContainer} to={createProductPath(cartItem.product.id, cartItem.product.category_id)}>
                <img className={styles.img} src={SERVER_URL + cartItem.product.image} alt={cartItem.product.name} />
            </Link>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <span className={styles.title}>{cartItem.product.name}</span>
                    <Sizes title='Размер:' sizes={cartItem.size} />
                    <Colors title='Цвет:' colors={cartItem.color} />
                    <Counter
                        handleAddClick={() => handleAddCartItemCountClick(cartItem.id, cartItem.quantity)}
                        handleRemoveClick={() => handleRemoveCartItemCountClick(cartItem.id, cartItem.quantity)}
                        count={cartItem.quantity}
                        direction='row'
                    />
                </div>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>{formattedPrice(cartItem.product.price * cartItem.quantity)}</span>
                    <div className={styles.removeBtnContainer}>
                        <Button painted={false} text='Удалить' handleClick={() => handleRemoveCartItemClick(cartItem.id)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
