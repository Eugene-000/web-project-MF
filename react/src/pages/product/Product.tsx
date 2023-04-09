import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Product.module.scss'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { ProductMain } from './components/productMain/ProductMain'

export const Product = () => {
  const {category_id, product_id} = useParams()
  
  return (
    <>
      <Header banner={false}/>
      <ProductMain />
      <Footer />
    </>
  )
}
