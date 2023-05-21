import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import { PATH_LOGIN } from '../../constants/routes'
import styles from './SignUp.module.scss'
import { HttpClient } from '../../api'
import { useActions } from '../../hooks/useAction'
import { Loader } from '../../components/loader/Loader'
import { Modal } from '../../components/modal/Modal'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import logo from '../../assets/images/M&F-orange.png'

export const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { visible, text } = useTypedSelector(state => state.modal);
  const { setAuthToken, setAuthUser } = useActions();

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSignUpForm = (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const payload = {
      full_name: fullNameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      password_confirmation: passwordConfirmationRef.current?.value,
      delivery_address: addressRef.current?.value,
      phone: phoneRef.current?.value,
    }
    HttpClient.post('/signup', payload)
      .then(({ data }) => {
        console.log(data)
        setAuthUser(data.user);
        setAuthToken(data.token);
        setIsLoading(false);
      }).catch((error) => {
        setIsLoading(false);
      })
  }

  return (
    <>
      <Modal text={text} isVisible={visible}/>
      {isLoading && <Loader />}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt="Логотип" />
          </div>
          <form onSubmit={handleSignUpForm} className={styles.formContainer}>
            <p className={styles.title}>Регистрация</p>
            <Input inputRef={fullNameRef} type='text' placeholder='* Введите ФИО' />
            <Input inputRef={emailRef} type='email' placeholder='* Введите E-mail' />
            <Input inputRef={addressRef} type='text' placeholder='Введите адрес доставки' />
            <Input inputRef={phoneRef} type='phone' placeholder='Введите номер телефона' />
            <Input inputRef={passwordRef} type='password' placeholder='* Введите пароль' />
            <Input inputRef={passwordConfirmationRef} type='password' placeholder='* Подтвердите пароль' />
            <Link className={styles.link} to={PATH_LOGIN}>
              <span>Уже имеется аккаунт? Войдите</span>
            </Link>
            <Button painted={true} text='Регистрация' handleClick={() => { null }} />
          </form>
        </div>
      </div>
    </>
  )
}
