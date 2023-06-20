import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import SHOP_DATA from '../data/shop-data';
import CircularProgress from '@mui/material/CircularProgress';
import ProductCardComponent from '../components/ProductCardComponent';


const Category = () => {
  
  const dispatch = useDispatch();
  const location = useLocation({})
  const category = location.state?.category
  
  const [categoryArray, setCategoryArray] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategory = () =>{
      const categoryData = SHOP_DATA.filter((item) => item.title === category);
    
      setCategoryArray(categoryData[0]);

      setLoading(false);
    }
    fetchCategory();

  },[])

  const {title, items} = categoryArray

  


  if(loading){
    return(
      <div className='w-full min-h-screen flex flex-col gap-4 items-center justify-center'>
        <CircularProgress sx={{color: '#b744b8'}} />
        <p className='text-3xl text-primary-brand font-bold'>Loading...</p>
      </div>
    )           
  }

  return (
    <div className='p-6 grid gap-5 items-center justify-center grid-cols-2 tablet:grid-cols-3 tablet:p-16 laptop:grid-cols-4'>
      {
        items.map((item) =>(                  
          <ProductCardComponent key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default Category