import React from 'react'
import { Button } from '../../../../components/button/Button'
import { Input } from '../../../../components/input/Input'
import styles from './MainProfile.module.scss'

export const MainProfile: React.FC = () => {
  return (
    <main className={styles.main}>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <span className={styles.title}>Профиль</span>
                <div className={styles.personalInfo}>
                    <span className={styles.subtitle}>Персональные данные:</span>
                    <div className={styles.inputsContainer}>
                        <div className={styles.inputContainer}>
                            <Input type='text' placeholder='ФИО'/>
                        </div>
                        <div className={styles.inputContainer}>
                            <Input type='email' placeholder='Email'/>
                        </div>
                        <div className={styles.inputContainer}>
                            <Input type='phone' placeholder='Телефон'/>
                        </div>
                    </div>
                </div>
                <div className={styles.personalInfo}>
                    <span className={styles.subtitle}>Адрес доставки:</span>
                    <div className={styles.adressContainer}>
                        <Input type='text' placeholder='Адрес доставки'/>
                    </div>
                </div>
                <div className={styles.btnsContainer}>
                    <div className={styles.updateContainer}>
                        <Button painted={true} text='Обновить данные' type='submit' handleClick={() => {}}/>
                    </div>
                    <div className={styles.exitContainer}>
                        <Button painted={false} text='Выйти' handleClick={() => {}}/>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
