import { Favorite, Image } from '@mui/icons-material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { searchCart } from '../features/shopSlice'
import ButtonComponent from './ButtonComponent'
import FormInput from './FormInput'


const ProductCardComponent = () => {

  const dispatch = useDispatch()

  const bigi = ''

  return (
    <div className='product-card'>
      <div className='container-block'>
        <img 
          src={'https://i.ibb.co/4W2DGKm/floral-blouse.png'} 
          alt='pattern-gown'
        />
        <div className='button-bar'>
          <div className='pointer'><i className='material-icons'>visibility</i></div>
          <div className='pointer'><i className='material-icons'>favorite</i></div>
          <div className='pointer'><i className='material-icons'>add_shopping_cart</i></div>
        </div>
      </div>
      <div className='text-secondary-plum'>
        <h2 className='text-xl font-bold'>Floral Blouse</h2>
        <p className='text-xl font-medium text-secondary-plum-hover'> &#8358;500</p>
      </div>
    </div>
  )
}

export default ProductCardComponent