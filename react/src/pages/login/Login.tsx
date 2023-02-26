import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Input } from '../../components/input/Input'
import styles from './Login.module.scss'
import { PATH_SIGN_UP } from '../../constants/routes'
import { Button } from '../../components/button/Button'

export const Login: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.logo}>M&F</span>
        <div className={styles.formContainer}>
          <p className={styles.title}>Вход</p>
          <Input type='email' placeholder='Введите E-mail'/>
          <Input type='password' placeholder='Введите пароль'/>
          <Link className={styles.link} to={PATH_SIGN_UP}>
            <span>Нет аккаунта? Зарегистрируйтесь</span>
          </Link>
          <Button painted={true} text='Войти' handleClick={() => {null}}/>
        </div>
      </div>
    </div>
  )
}
