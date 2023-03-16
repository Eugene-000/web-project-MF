import React from 'react'
import { IItem } from '../../../../models/items'
import { About } from './components/about/About'
import { NewCollection } from './components/newCollection/NewCollection'
import { Popular } from './components/popular/Popular'
import styles from './HomeMain.module.scss'

interface IProps {
  newCollectionItems: Array<IItem> | null,
  popularItems: Array<IItem> | null
}

export const HomeMain:React.FC<IProps> = ({newCollectionItems, popularItems}) => {
  return (
    <main className={styles.main}>
        <NewCollection items={newCollectionItems}/>
        <Popular items={popularItems}/>
        <About />
    </main>
  )
}
