import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import { PATH_LOGIN } from '../../constants/routes'
import styles from './SignUp.module.scss'

export const SignUp: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.logo}>M&F</span>
        <div className={styles.formContainer}>
          <p className={styles.title}>Регистрация</p>
          <Input type='text' placeholder='Введите ФИО'/>
          <Input type='email' placeholder='Введите E-mail'/>
          <Input type='password' placeholder='Введите пароль'/>
          <Input type='password' placeholder='Подтвердите пароль'/>
          <Link className={styles.link} to={PATH_LOGIN}>
            <span>Уже имеется аккаунт? Войдите</span>
          </Link>
          <Button painted={true} text='Регистрация' handleClick={() => {null}}/>
        </div>
      </div>
    </div>
  )
}
