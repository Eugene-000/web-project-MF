import React, { useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Input } from '../../components/input/Input'
import styles from './Login.module.scss'
import { PATH_SIGN_UP } from '../../constants/routes'
import { Button } from '../../components/button/Button'
import { HttpClient } from '../../api'
import { useActions } from '../../hooks/useAction'
import { Loader } from '../../components/loader/Loader'
import { Modal } from '../../components/modal/Modal'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import logo from '../../assets/images/M&F-orange.png'

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { visible, text } = useTypedSelector(state => state.modal);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { setAuthToken, setAuthUser } = useActions();

  const handleLoginForm = (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const payload = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    }
    HttpClient.post('/login', payload)
    .then(({ data }) => {
      console.log(data)
      if (data.user && data.token) {
        setAuthUser(data.user);
        setAuthToken(data.token);
      }
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
          <form onSubmit={handleLoginForm} className={styles.formContainer}>
            <p className={styles.title}>Вход</p>
            <Input inputRef={emailRef} type='email' placeholder='Введите E-mail' />
            <Input inputRef={passwordRef} type='password' placeholder='Введите пароль' />
            <Link className={styles.link} to={PATH_SIGN_UP}>
              <span>Нет аккаунта? Зарегистрируйтесь</span>
            </Link>
            <Button painted={true} text='Войти' handleClick={() => { null }} />
          </form>
        </div>
      </div>
    </>
  )
}
