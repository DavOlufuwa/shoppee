import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCartItem } from '../features/cartSlice'
import { addItemToFavorite } from '../features/favoriteSlice'
import AddFavorite from '/assets/icons/heart-plus.svg'




const ProductCardComponent = ({item}) => {

  const [singleItem, setSingleItem] = useState({...item, quantity : 1})

  const { id, title, images, price} = singleItem;

  const dispatch = useDispatch()

  return (
    <div className='product-card'>
      <div className='container-block h-[300px]'>
        <img 
          src={`${images[0]}`} 
          alt={title}
          className='w-full h-full object-cover'
        />
        <div className='button-bar'>
          <Link className='pointer' to="/productinformation" state={{...singleItem}}><i className='material-icons'>visibility</i></Link>
          <div className='pointer p-3'  onClick={()=> dispatch(addItemToFavorite(singleItem))}><img src={AddFavorite} alt='add to favorite' className=''/></div>
          <div className='pointer' onClick={()=>dispatch(addCartItem(singleItem))}><i className='material-icons'>add_shopping_cart</i></div>
        </div>
      </div>
      <div className='flex items-center py-2'>
        <h2 className='text-[16px] w-[70%]  lowercase'>{title}</h2>
        <p className='text-lg font-medium w-[30%] text-right'> &#8358;{price}</p>
      </div>
    </div>
  )
}

export default ProductCardComponent