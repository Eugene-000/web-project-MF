import React, { useState } from 'react'
import { Header } from '../../components/header/Header'
import { HomeMain } from './components/homeMain/HomeMain'

export const Home: React.FC = () => {

  const [newCollectionItems, setNewCollectionItems] = useState([
    {id: 1, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
    {id: 2, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
    {id: 3, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
  ]);

  const [popularItems, setPopularItems] = useState([
    {id: 1, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
    {id: 2, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
    {id: 3, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
  ]);
  
  return (
    <>
      <Header banner={true}/>
      <HomeMain newCollectionItems={newCollectionItems} popularItems={popularItems}/>
    </>
  )
}
