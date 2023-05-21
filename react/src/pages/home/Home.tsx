import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header'
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
// import { getNewPopularItems } from '../../store/items/thunks';
import { HomeMain } from './components/homeMain/HomeMain'
import { Loader } from '../../components/loader/Loader';

export const Home: React.FC = () => {

  const { newPopularItems, error, isLoading } = useTypedSelector(state => state.items);
  const { getNewPopularItems } = useActions();

  useEffect(() => {
    getNewPopularItems();
  }, [])

  return (
    <div className={styles.pageRoot}>
      {isLoading && <Loader />}
      <Header banner={false} />
      <HomeMain newCollectionItems={newPopularItems?.newItem} popularItems={newPopularItems?.popularItem} />
      <Footer />
    </div>
  )
}
