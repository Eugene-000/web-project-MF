import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Product.module.scss'

export const Product = () => {
  const {category_id, product_id} = useParams()
  
  return (
    <div>Product</div>
  )
}
