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
import { Modal } from '../../../../components/modal/Modal'
import { Loader } from '../../../../components/loader/Loader'

interface IProps {
    item: IItem
}

export const ProductMain: React.FC<IProps> = ({ item }) => {

    const [selectedSize, setSelectedSize] = useState<number>(0);
    const [selectedColor, setSelectedColor] = useState<number>(0);
    const [count, setCount] = useState<number>(1);
    const [modalState, setModalState] = useState({
        text: "",
        visible: false
    });
    const [isLoading, setIsLoading] = useState(false);

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
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleAddToCart = () => {
        setIsLoading(true);
        if (selectedSize && selectedColor && localStorage.getItem('USER_ID') && item.id) {
            console.log("!")
            const payload = {
                userId: localStorage.getItem('USER_ID'),
                productId: item.id,
                colorId: selectedColor,
                sizeId: selectedSize,
                quantity: count,
            }
            CartApi.setProductToCart(payload);
            setModalState({ text: "Продукт добавлен в корзину", visible: true })
            setTimeout(() => {
                setModalState({ text: "Продукт добавлен в корзину", visible: false })
            }, 5000)
            setIsLoading(false);
        } else {
            setIsLoading(false);
            setModalState({ text: "Цвет или размер не выбраны", visible: true })
            setTimeout(() => {
                setModalState({ text: "Цвет или размер не выбраны", visible: false })
            }, 5000)
        }
    }

    return (
        <>
            {isLoading && <Loader />}
            <Modal text={modalState.text} isVisible={modalState.visible} />
            <div className={styles.wrapper}>
                <span className={styles.title}>{item.name}</span>
                <div className={styles.mainContainer}>
                    <div className={styles.imgContainer}>
                        <img src={SERVER_URL + item.image} className={styles.productImage} alt={item.name} />
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.sizeContainer}>
                            <Sizes selectedSize={selectedSize} handleSizeClick={handleSizeClick} sizes={item.sizes} title='Выберете размер:' productPage={true} />
                        </div>
                        <div className={styles.colorContainer}>
                            <Colors selectedColor={selectedColor} handleColorClick={handleColorClick} colors={item.colors} title='Выберете цвет:' productPage={true} />
                        </div>
                        <div className={styles.countContainer}>
                            <Counter direction='' count={count} handleAddClick={handleAddCountClick} handleRemoveClick={handleRemoveCountClick} />
                        </div>
                        <div className={styles.container}>
                            <div className={styles.priceContainer}>
                                <span className={styles.text}>Цена:</span>
                                <span className={styles.price}>{formattedPrice(item.price * count)}</span>
                            </div>
                            <div className={styles.addToCart}>
                                <Button icon='cart' painted text='В корзину' handleClick={handleAddToCart} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <span className={styles.descriptionTitle}>О товаре:</span>
                    <p className={styles.description}>{item.description}</p>
                </div>
            </div>
        </>
    )
}
