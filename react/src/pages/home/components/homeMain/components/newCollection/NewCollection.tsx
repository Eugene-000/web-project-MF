import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../../../components/button/Button'
import { MainItem } from '../../../../../../components/mainItem/MainItem'
import { PATH_CATALOG } from '../../../../../../constants/routes'
import { createCatalogPath } from '../../../../../../lib/createPath'
import { IItem } from '../../../../../../models/items'
import styles from './NewCollection.module.scss'

interface IProps {
  items?: Array<IItem> | null
}

export const NewCollection:React.FC<IProps> = ({items}) => {

  const navigate = useNavigate();

  const handleBtnClick = ():void => {
    navigate(createCatalogPath("all"));
  }

  return (
    <section className={styles.container}>
      <p className={styles.title}>Новая коллекция</p>
      <div className={styles.itemContainer}>
        {items && items.map(item => (
          <div key={item.id} className={styles.cardContainer}>
            <MainItem key={item.id} item={item}/>
          </div>
        ))}
      </div>
      <div className={styles.btnContainer}>
        <Button painted={false} text='Показать больше' icon='arrow' handleClick={handleBtnClick}/>
      </div>
    </section>
  )
}
