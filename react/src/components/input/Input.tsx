import React from 'react'
import styles from './Input.module.scss'

interface IProps {
    type: string;
    placeholder: string;
    value?: string;
    inputRef?: React.LegacyRef<HTMLInputElement>;
    handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void 
}

export const Input: React.FC<IProps> = ({type, placeholder, value, inputRef, handleInputChange}) => {
  return (
    <>
    {inputRef ? (
      <input ref={inputRef} onChange={handleInputChange} className={styles.input} type={type} placeholder={placeholder} value={value}/>
    ) : (
      <input className={styles.input} type={type} placeholder={placeholder} value={value}/>
    )}
    </>
  )
}
