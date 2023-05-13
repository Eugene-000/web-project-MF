import React, { useEffect, useRef, useState } from 'react';
import styles from './CartForm.module.scss';
import { Input } from '../../../../../../components/input/Input';
import { Button } from '../../../../../../components/button/Button';
import { formattedPrice } from '../../../../../../utils/priceFormat';
import { IUser } from '../../../../../../models/user';

interface IProps {
  totalPrice: number,
  user: IUser | null
}

export const CartForm: React.FC<IProps> = ({totalPrice, user}) => {

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState(user?.full_name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [address, setAddress] = useState(user?.delivery_address || '');

  useEffect(() => {
    if(user) {
        setFullName(user?.full_name);
        setEmail(user?.email);
        setPhone(user?.phone || '');
        setAddress(user?.delivery_address || '');
    }
  }, [user])

  const handleUpdateClick = () => {
    // if (isFormChange) {
    //     const payload = {
    //         full_name: fullNameRef.current?.value,
    //         email: emailRef.current?.value,
    //         phone: phoneRef.current?.value,
    //         delivery_address: addressRef.current?.value,
    //     }
    //     if (user?.id) {
    //         setUserUpdate(user?.id, payload)
    //     }
    // }
  }
    
  return (
    <div className={styles.container}>
      <span className={styles.title}>Оформление заказа</span>
      <form className={styles.form}>
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
          <Button painted={true} text='Оформить заказ' handleClick={() => {}}/>
        </div>
      </form>
    </div>
  )
}
