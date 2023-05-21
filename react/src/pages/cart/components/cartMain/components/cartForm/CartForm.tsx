import React, { useEffect, useRef, useState } from 'react';
import styles from './CartForm.module.scss';
import { Input } from '../../../../../../components/input/Input';
import { Button } from '../../../../../../components/button/Button';
import { formattedPrice } from '../../../../../../utils/priceFormat';
import { IUser } from '../../../../../../models/user';
import { useTypedSelector } from '../../../../../../hooks/useTypedSelector';
import { CartApi } from '../../../../../../api/cart';
import { Modal } from '../../../../../../components/modal/Modal';
import { Loader } from '../../../../../../components/loader/Loader';
import { useActions } from '../../../../../../hooks/useAction';

interface IProps {
  totalPrice: number,
  user: IUser | null
}

export const CartForm: React.FC<IProps> = ({ totalPrice, user }) => {

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const { cartItems } = useTypedSelector(state => state.items);

  const { setIsAddOrder } = useActions();

  const [fullName, setFullName] = useState(user?.full_name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [address, setAddress] = useState(user?.delivery_address || '');
  const [modalState, setModalState] = useState({
    text: "",
    visible: false
  })
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFullName(user?.full_name);
      setEmail(user?.email);
      setPhone(user?.phone || '');
      setAddress(user?.delivery_address || '');
    }
  }, [user])


  const handleAddOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (cartItems?.length) {
      if (
        user &&
        fullNameRef.current?.value &&
        emailRef.current?.value &&
        phoneRef.current?.value &&
        addressRef.current?.value &&
        totalPrice
      ) {
        const payload = {
          user_id: user.id,
          full_name: fullNameRef.current?.value,
          email: emailRef.current?.value,
          phone: phoneRef.current?.value,
          delivery_address: addressRef.current?.value,
          total_price: totalPrice
        }
        CartApi.setProductsToCart(payload);
        setIsLoading(false);
        setIsAddOrder(true);
        setModalState({ text: "Заказ оформлен и отправлен на почту", visible: true })
        setTimeout(() => {
          setModalState({ text: "Заказ оформлен и отправлен на почту", visible: false })
        }, 5000)
      } else {
        setIsLoading(false);
        setModalState({ text: "Заполните все поля для оформления заказа", visible: true })
        setTimeout(() => {
          setModalState({ text: "Заполните все поля для оформления заказа", visible: false })
        }, 5000)
      }
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Modal text={modalState.text} isVisible={modalState.visible} />
      <div className={styles.container}>
        <span className={styles.title}>Оформление заказа</span>
        <form onSubmit={handleAddOrder} className={styles.form}>
          <div className={styles.inputs}>
            <div className={styles.inputContainer}>
              <Input
                inputRef={fullNameRef}
                type='text'
                placeholder='Введите ФИО'
                value={fullName}
                handleInputChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <Input
                inputRef={phoneRef}
                type='phone'
                placeholder='Введите номер телефона'
                value={phone}
                handleInputChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <Input
                inputRef={emailRef}
                type='email'
                placeholder='Введите E-mail'
                value={email}
                handleInputChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <Input
                inputRef={addressRef}
                type='text'
                placeholder='Введите адрес доставки'
                value={address}
                handleInputChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.text}>Итого</span>
            <span className={styles.price}>{formattedPrice(totalPrice)}</span>
          </div>
          <div className={styles.btnContainer}>
            <Button painted={true} text='Оформить заказ' handleClick={() => { }} />
          </div>
        </form>
      </div>
    </>
  )
}
