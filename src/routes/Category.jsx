import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import ProductCardComponent from '../components/ProductCardComponent';



const Category = () => {
  
  const dispatch = useDispatch();
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const category = location.state?.category
  const {items} = useSelector((store) => store.shop)
  const [productArray, setProductArray] = useState(items)
  
  useEffect(() => {

    const filteredCategory = () => {
    
      switch (category) {
          case 'me':
            return productArray.filter(product => product.category.startsWith(category.toLowerCase()))
          case 'wo':
            return productArray.filter(product => product.category.startsWith(category.toLowerCase()))  
          case 'ev':
            return productArray.filter(product => !product.category.startsWith("l") && !product.category.startsWith("ho") && !product.category.startsWith("gr") && !product.category.startsWith("fu") && !product.category.startsWith("sm") && !product.category.startsWith("au") && !product.category.startsWith("mo"))  
          default:
            return productArray
          }
      }
    setProductArray(filteredCategory())
    setLoading(false)
    
  }, [])
    
  if(loading){
    return(
      <div className='w-full min-h-screen flex flex-col gap-4 items-center justify-center'>
        <CircularProgress sx={{color: '#b744b8'}} />
        <p className='text-3xl text-primary-brand font-bold'>Loading...</p>
      </div>
    )           
  }

  return (
    <div className='p-6 grid gap-5 grid-cols-2 tablet:grid-cols-3 tablet:p-16 laptop:grid-cols-4'>
      {
        productArray.map((product) =>(                  
          <ProductCardComponent key={product.id} item={product} />
        ))
      }
    </div>
  )
}

export default Category