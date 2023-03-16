import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../../../components/button/Button'
import { MainItem } from '../../../../../../components/mainItem/MainItem'
import { PATH_CATALOG } from '../../../../../../constants/routes'
import { IItem } from '../../../../../../models/items'
import styles from './Popular.module.scss'

interface IProps {
  items: Array<IItem> | null
}

export const Popular:React.FC<IProps> = ({items}) => {

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(PATH_CATALOG);
  }
  
  return (
    <section className={styles.container}>
      <p className={styles.title}>Популярное</p>
      <div className={styles.itemContainer}>
        {items && items.map(item => (
          <MainItem key={item.id} item={item}/>
        ))}
      </div>
      <Button painted={false} text='Показать больше' icon='arrow' handleClick={handleBtnClick}/>
    </section>
  )
}
