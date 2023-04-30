import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import { PATH_LOGIN } from '../../constants/routes'
import styles from './SignUp.module.scss'
import { HttpClient } from '../../api'
import { useActions } from '../../hooks/useAction'

export const SignUp: React.FC = () => {

  const {setAuthToken, setUser} = useActions();

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const handleSignUpForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      full_name: fullNameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      password_confirmation: passwordConfirmationRef.current?.value,
    }
    HttpClient.post('/signup', payload)
      .then(({data}) => {
        setUser(data.user);
        setAuthToken(data.token)
      })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.logo}>M&F</span>
        <form onSubmit={handleSignUpForm} className={styles.formContainer}>
          <p className={styles.title}>Регистрация</p>
          <Input inputRef={fullNameRef} type='text' placeholder='Введите ФИО'/>
          <Input inputRef={emailRef} type='email' placeholder='Введите E-mail'/>
          <Input inputRef={passwordRef} type='password' placeholder='Введите пароль'/>
          <Input inputRef={passwordConfirmationRef} type='password' placeholder='Подтвердите пароль'/>
          <Link className={styles.link} to={PATH_LOGIN}>
            <span>Уже имеется аккаунт? Войдите</span>
          </Link>
          <Button painted={true} text='Регистрация' handleClick={() => {null}}/>
        </form>
      </div>
    </div>
  )
}
