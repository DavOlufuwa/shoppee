import React from 'react'
import { useSelector } from 'react-redux'
import ProductCardComponent from '../components/ProductCardComponent'

const SavedItems = () => {
  const {favoriteItems} = useSelector((state) => state.favorite)

  
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

export default SavedItems