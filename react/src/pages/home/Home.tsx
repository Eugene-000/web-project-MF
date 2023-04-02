import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header'
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
// import { getNewPopularItems } from '../../store/items/thunks';
import { HomeMain } from './components/homeMain/HomeMain'

export const Home: React.FC = () => {

  const {newPopularItems, error, isLoading} = useTypedSelector(state => state.items);
  const {getNewPopularItems} = useActions();

  useEffect(() => {
    getNewPopularItems();
  }, [])
  
  return (
    <>
      <Header banner={true}/>
      <HomeMain newCollectionItems={newPopularItems?.newItem} popularItems={newPopularItems?.popularItem}/>
      <Footer />
    </>
  )
}
