import React, { useState } from 'react'
import styles from './ProductMain.module.scss'
import { Sizes } from '../../../../components/sizes/Sizes'
import { Colors } from '../../../../components/colors/Colors'
import { IItem } from '../../../../models/items'
import { SERVER_URL } from '../../../../constants/routes'
import { Counter } from '../../../../components/counter/Counter'
import { Button } from '../../../../components/button/Button'
import { CartApi } from '../../../../api/cart'
import { formattedPrice } from '../../../../utils/priceFormat'

interface IProps {
    item: IItem
}

export const ProductMain:React.FC<IProps> = ({item}) => {

    const [selectedSize, setSelectedSize] = useState<number>(0);
    const [selectedColor, setSelectedColor] = useState<number>(0);
    const [count, setCount] = useState<number>(1);

    const handleSizeClick = (id: number) => {
        setSelectedSize(id);
    }

    const handleColorClick = (id: number) => {
        setSelectedColor(id);
    }

    const handleAddCountClick = () => {
        setCount(count + 1)
    }

    const handleRemoveCountClick = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    const handleAddToCart = () => {
        if (selectedSize && selectedColor && localStorage.getItem('USER_ID') && item.id) {
            const payload = {
                userId: localStorage.getItem('USER_ID'),
                productId: item.id,
                colorId: selectedColor,
                sizeId: selectedSize,
                quantity: count,
            }
            CartApi.setProductToCart(payload);
        }
    }

  return (
    <div className={styles.wrapper}>
        <span className={styles.title}>{item.name}</span>
        <div className={styles.mainContainer}>
            <div className={styles.imgContainer}>
                <img src={SERVER_URL + item.image} className={styles.productImage} alt={item.name} />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.sizeContainer}>
                    <Sizes selectedSize={selectedSize} handleSizeClick={handleSizeClick} sizes={item.sizes} title='Выберете размер:' productPage={true}/>
                </div>
                <div className={styles.colorContainer}>
                    <Colors selectedColor={selectedColor} handleColorClick={handleColorClick} colors={item.colors} title='Выберете цвет:' productPage={true}/>
                </div>
                <div className={styles.countContainer}>
                    <Counter count={count} handleAddClick={handleAddCountClick} handleRemoveClick={handleRemoveCountClick}/>
                </div>
                <div className={styles.container}>
                    <div className={styles.priceContainer}>
                        <span className={styles.text}>Цена:</span>
                        <span className={styles.price}>{formattedPrice(item.price * count)}</span>
                    </div>
                    <div className={styles.addToCart}>
                        <Button icon='cart' painted text='В корзину' handleClick={handleAddToCart}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.descriptionContainer}>
            <span className={styles.descriptionTitle}>О товаре:</span>
            <p className={styles.description}>{item.description}</p>
        </div>
    </div>
  )
}
