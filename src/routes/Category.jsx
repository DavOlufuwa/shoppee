import React, { useMemo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import ProductCardComponent from '../components/ProductCardComponent';



const Category = () => {
  
  const navigate = useNavigate()
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const category = location.state?.category
  const categoryTitle = location.state?.categoryTitle
  const {items} = useSelector((store) => store.shop)
  const [productArray, setProductArray] = useState(items)
  

  // put filtered category inside useMemo

  const filteredCategory = useMemo(() => {
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
  }, [])

  
  useEffect(() => {
    setLoading(false)  
    setProductArray(filteredCategory)
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
    <>
      <h2 className='px-6 py-4 text-primary-brand text-2xl font-bold tablet:px-16'>{categoryTitle}</h2>
      <div className='p-6 grid gap-5 grid-cols-2 tablet:grid-cols-3 tablet:p-16 laptop:grid-cols-4'>
        {
          productArray.map((product) =>(                  
            <ProductCardComponent key={product.id} item={product} />
          ))
        }
      </div>
    </>
  )
}

export default Category