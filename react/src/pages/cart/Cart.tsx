import React, { useEffect, useState } from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { CartMain } from './components/cartMain/CartMain'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useAction'
import { CartApi } from '../../api/cart'
import { getTotalCartPrice } from '../../utils/cart'

export const Cart: React.FC = () => {
  const {cartItems, error, isLoading} = useTypedSelector(state => state.items);
  const {getCartItems} = useActions();
  const [updateCart, setUpdateCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userId, setUserID] = useState(localStorage.getItem('USER_ID'));
  const {user} = useTypedSelector(state => state.user);
  const {getUser} = useActions();
  useEffect(() => {
    if (userId) {
      getUser(userId);
    }
  }, [])

  useEffect(() => {
    if (userId) {
      getCartItems(userId);
    }
    setUpdateCart(false);
  }, [updateCart])

  useEffect(() => {
    if(cartItems) {
      setTotalPrice(getTotalCartPrice(cartItems));
    }
  }, [cartItems])

  const handleAddCartItemCountClick = (id: number, quantity: number) => {
    const payload = {
        quantity: quantity + 1,
    }
    CartApi.setUpdateQuantityItem(id, payload);
    setUpdateCart(true);
  }

  const handleRemoveCartItemCountClick = (id: number, quantity: number) => {
    const payload = {
      quantity: quantity - 1,
    }
    CartApi.setUpdateQuantityItem(id, payload);
    setUpdateCart(true);
  }

  const handleRemoveCartItemClick = (id: number) => {
    CartApi.setDeleteItem(id);
    setUpdateCart(true);
  }

  return (
    <>
      <Header banner={false}/>
      <CartMain 
        cartItems={cartItems}
        handleAddCartItemCountClick={handleAddCartItemCountClick} 
        handleRemoveCartItemCountClick={handleRemoveCartItemCountClick}
        handleRemoveCartItemClick={handleRemoveCartItemClick}
        totalPrice={totalPrice}
        user={user}
      />
      <Footer />
    </>
  )
}
