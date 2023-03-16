import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../../../components/button/Button'
import { MainItem } from '../../../../../../components/mainItem/MainItem'
import { PATH_CATALOG } from '../../../../../../constants/routes'
import { IItem } from '../../../../../../models/items'
import styles from './NewCollection.module.scss'

interface IProps {
  items: Array<IItem> | null
}

export const NewCollection:React.FC<IProps> = ({items}) => {

  const navigate = useNavigate();

  const handleBtnClick = ():void => {
    navigate(PATH_CATALOG);
  }

  return (
    <section className={styles.container}>
      <p className={styles.title}>Новая коллекция</p>
      <div className={styles.itemContainer}>
        {items && items.map(item => (
          <MainItem key={item.id} item={item}/>
        ))}
      </div>
      <Button painted={false} text='Показать больше' icon='arrow' handleClick={handleBtnClick}/>
    </section>
  )
}
