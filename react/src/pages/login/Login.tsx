import React, { useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Input } from '../../components/input/Input'
import styles from './Login.module.scss'
import { PATH_SIGN_UP } from '../../constants/routes'
import { Button } from '../../components/button/Button'
import { HttpClient } from '../../api'
import { useActions } from '../../hooks/useAction'

export const Login: React.FC = () => {
  
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const {setAuthToken, setAuthUser} = useActions();

  const handleLoginForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    }
    HttpClient.post('/login', payload)
      .then(({data}) => {
        setAuthUser(data.user);
        setAuthToken(data.token)
      })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.logo}>M&F</span>
        <form onSubmit={handleLoginForm} className={styles.formContainer}>
          <p className={styles.title}>Вход</p>
          <Input inputRef={emailRef} type='email' placeholder='Введите E-mail'/>
          <Input inputRef={passwordRef} type='password' placeholder='Введите пароль'/>
          <Link className={styles.link} to={PATH_SIGN_UP}>
            <span>Нет аккаунта? Зарегистрируйтесь</span>
          </Link>
          <Button painted={true} text='Войти' handleClick={() => {null}}/>
        </form>
      </div>
    </div>
  )
}
