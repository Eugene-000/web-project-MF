import React from 'react'
import styles from './Input.module.scss'

interface IProps {
    type: string;
    placeholder: string;
    value?: string;
}

export const Input: React.FC<IProps> = ({type, placeholder, value}) => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} value={value}/>
  )
}
