import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductInfoComponent from '../components/ProductInfoComponent'


const ProductInfo = () => {
  
  const location = useLocation()

  const incomingProduct = location.state?.product

  const [product, setProduct] = useState(incomingProduct)

  return (
    <div>
      <ProductInfoComponent product={product}/>
    </div>
  )
}

export default ProductInfo