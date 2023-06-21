import { Favorite, Image } from '@mui/icons-material'
import React from 'react'
import { useDispatch, } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCartItem } from '../features/cartSlice'




const ProductCardComponent = ({item}) => {

  const {id, name, imageUrl, price, size} = item;

  const dispatch = useDispatch()

  return (
    <div className='product-card'>
      <div className='container-block h-[300px]'>
        <img 
          src={imageUrl} 
          alt={name}
          className='w-full h-full object-cover'
        />
        <div className='button-bar'>
          <Link className='pointer' to="/productinformation" state={{product : item}}><i className='material-icons'>visibility</i></Link>
          <div className='pointer'><i className='material-icons'>favorite</i></div>
          <div className='pointer' onClick={()=>dispatch(addCartItem(item))}><i className='material-icons'>add_shopping_cart</i></div>
        </div>
      </div>
      <div className='h-[px]'>
        <h2 className='text-[16px] mt-1'>{name}</h2>
        <p className='text-lg font-medium '> &#8358;{price}</p>
      </div>
    </div>
  )
}

export default ProductCardComponent