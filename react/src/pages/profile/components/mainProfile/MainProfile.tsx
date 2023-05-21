import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../../../../components/button/Button'
import { Input } from '../../../../components/input/Input'
import styles from './MainProfile.module.scss'
import { IUser, IUserUpdate } from '../../../../models/user'
import { useActions } from '../../../../hooks/useAction'
import { Modal } from '../../../../components/modal/Modal'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

interface IProps {
    handleLogout: () => void
    user: IUser | null,
}

export const MainProfile: React.FC<IProps> = ({ handleLogout, user }) => {
    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);

    const [fullName, setFullName] = useState(user?.full_name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [phone, setPhone] = useState(user?.phone || '');
    const [address, setAddress] = useState(user?.delivery_address || '');


    const [isFormChange, setIsFormChange] = useState(false);
    const { setUserUpdate } = useActions();
    const { visible, text } = useTypedSelector(state => state.modal);

    useEffect(() => {
        if (user) {
            setFullName(user.full_name);
            setEmail(user.email);
            setPhone(user?.phone || '');
            setAddress(user?.delivery_address || '');
        }
    }, [user])

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsFormChange(true);
        setFullName(event.target.value)
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsFormChange(true);
        setEmail(event.target.value)
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsFormChange(true);
        setPhone(event.target.value)
    };

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsFormChange(true);
        setAddress(event.target.value)
    };


    const handleUpdateClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isFormChange) {
            if (user && fullNameRef.current?.value && emailRef.current?.value) {
                const payload = {
                    full_name: fullNameRef.current?.value,
                    email: emailRef.current?.value,
                    phone: phoneRef.current?.value,
                    delivery_address: addressRef.current?.value,
                }
                setUserUpdate(user.id, payload);
            }
            setIsFormChange(false);
        }
    };

    return (
        <>
            <Modal text={text} isVisible={visible}/>
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <form className={styles.container} onSubmit={handleUpdateClick}>
                            <span className={styles.title}>Профиль</span>
                            <div className={styles.personalInfo}>
                                <span className={styles.subtitle}>Персональные данные:</span>
                                <div className={styles.inputsContainer}>
                                    <div className={styles.inputContainer}>
                                        <Input inputRef={fullNameRef} handleInputChange={handleNameChange} type='text' placeholder='ФИО' value={fullName} />
                                    </div>
                                    <div className={styles.inputContainer}>
                                        <Input inputRef={emailRef} handleInputChange={handleEmailChange} type='email' placeholder='Email' value={email} />
                                    </div>
                                    <div className={styles.inputContainer}>
                                        <Input inputRef={phoneRef} handleInputChange={handlePhoneChange} type='phone' placeholder='Телефон' value={phone} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.personalInfo}>
                                <span className={styles.subtitle}>Адрес доставки:</span>
                                <div className={styles.adressContainer}>
                                    <Input inputRef={addressRef} handleInputChange={handleAddressChange} type='text' placeholder='Адрес доставки' value={address} />
                                </div>
                            </div>
                            <div className={styles.btnsContainer}>
                                <div className={styles.updateContainer}>
                                    <Button painted={true} text='Обновить данные' type='submit' handleClick={() => {}} />
                                </div>
                                <div className={styles.exitContainer}>
                                    <Button painted={false} text='Выйти' handleClick={handleLogout} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}
