import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header'
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getNewItems } from '../../store/items/thunks';
import { HomeMain } from './components/homeMain/HomeMain'

export const Home: React.FC = () => {

  // const [newCollectionItems, setNewCollectionItems] = useState([
  //   {id: 1, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
  //   {id: 2, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
  //   {id: 3, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
  // ]);

  // const [popularItems, setPopularItems] = useState([
  //   {id: 1, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
  //   {id: 2, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
  //   {id: 3, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
  // ]);
  const {newItems, error, isLoading} = useTypedSelector(state => state.items);
  const {getNewItems} = useActions();

  console.log(newItems)
  console.log(error)
  console.log(isLoading)

  useEffect(() => {
    getNewItems();
  }, [])
  
  return (
    <>
      <Header banner={true}/>
      {/* <HomeMain newCollectionItems={newCollectionItems} popularItems={popularItems}/> */}
      <Footer />
    </>
  )
}
