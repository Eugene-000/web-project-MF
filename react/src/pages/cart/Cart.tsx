import React, { useState } from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { CartMain } from './components/cartMain/CartMain'

export const Cart: React.FC = () => {
  const [cartItems, setItems] = useState([
    {id: 1, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
    {id: 2, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
    {id: 3, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
    {id: 4, name: 'Пиджак', description: '', image: '', price: 7000, category_id: 1, colors: ['white', 'black', 'green'], sizes: ['S', 'M', 'L', 'XL']},
  ]);
  return (
    <>
      <Header banner={false}/>
      {/* <CartMain cartItems={cartItems}/> */}
      <Footer />
    </>
  )
}
