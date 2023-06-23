import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductInfoComponent from '../components/ProductInfoComponent'


const ProductInfo = () => {
  
  const location = useLocation()

  const incomingProduct = location.state

  const [product] = useState(incomingProduct)

  return (
    <div className='bg-background-tetiary palmtop:px-5 '>
      <ProductInfoComponent product={product}/>
    </div>
  )
}

export default ProductInfo