import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Product.module.scss'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { ProductMain } from './components/productMain/ProductMain'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useAction'

export const Product = () => {
  const {category_id, product_id} = useParams()
  const {item, error, isLoading} = useTypedSelector(state => state.items);
  const {getItem} = useActions();

  useEffect(() => {
    if (product_id) {
      getItem(product_id);
    }
  }, []);

  console.log(item)
  
  return (
    <>
      <Header banner={false}/>
      {item && <ProductMain item={item}/>}
      <Footer />
    </>
  )
}
