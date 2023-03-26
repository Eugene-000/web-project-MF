import React, { useState } from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { CatalogMain } from './components/catalogMain/CatalogMain'

export const Catalog: React.FC = () => {

  const [items, setItems] = useState([
    {id: 1, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
    {id: 2, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
    {id: 3, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
    {id: 4, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
  ]);

  const handleClickCategory = (categoryId: number): void => {
    console.log(categoryId)
  }

  return (
    <>
      <Header banner={false}/>
      <CatalogMain items={items} handleClickCategory={handleClickCategory}/>
      <Footer />
    </>
  )
}
