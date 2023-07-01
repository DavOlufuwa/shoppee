import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../components/FooterComponent'
import Navigation from '../components/Navigation'
import { getFromLocalStorage, storeInLocalStorage } from '../features/cartSlice'
import { getFavoritesFromLocalStorage, storeFavoritesInLocalStorage } from '../features/favoriteSlice'


const Home = () => {
  const dispatch = useDispatch()

  const {cartItems} = useSelector((state)=> state.cart)
  const {favoriteItems} = useSelector((state)=> state.favorites)
  
  useEffect(()=>{
    dispatch(getFromLocalStorage())
  }, [])

  useEffect(()=>{
    dispatch(getFavoritesFromLocalStorage())
  }, [])

  useEffect(()=>{
    dispatch(storeInLocalStorage())
  }, [cartItems])
  
  
  
  useEffect(()=>{
    dispatch(storeFavoritesInLocalStorage())
  }, [favoriteItems])
  
  return (
    <>
      <Navigation />
      <main className='mt-24 tablet:mt-16'>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  )
}



export default Home