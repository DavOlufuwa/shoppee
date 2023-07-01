import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeCartItem } from '../features/cartSlice'
import { addItemToFavorite } from '../features/favoriteSlice'
import ButtonComponent from './ButtonComponent'

const CartItemComponent = ({product}) => {

  const {id, title, images, price, quantity} = product;

  const dispatch = useDispatch()

  return (
    <div className='flex flex-col  gap-2 border-secondary-plum-disabled border-[1px] pt-2 px-4 min-w-[340px]'>
      <section className='flex max-h-[200px] gap-6 justify-between '>
        <div className='flex flex-col w-[160px] gap-2 p-2 mt-2'>
          <img src={images[0]} alt={title} className='w-full h-full object-contain max-h-[150px]' />
          <p className='text-[14px] text-center'>{title.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}</p>
        </div>
        <div className=' flex flex-col justify-end gap-2'>       
          <div className=''>
            <p className='text-2xl font-bold'>&#8358;{price * quantity}</p>
            <small className='text-[#717171] font-medium'>&#8358;{price} x {quantity} item{`${quantity > 1 ? 's' : ''}`}</small>
          </div>
          <div>
            <small className='text-[#9d9c9c] font-extrabold text'>Quantity</small>
            <div className='flex justify-between items-center mb-3'> 
              <div className='counter'>
                <span onClick={()=> dispatch(decreaseQuantity(id))} className={quantity === 1  && 'cursor-not-allowed'}><i className='material-icons'>remove</i></span>
                <span>{quantity}</span>
                <span onClick={()=> dispatch(increaseQuantity(id))}><i className='material-icons'>add</i></span>
              </div>
            </div>
          </div>
        </div>           
      </section>
      <div className='flex justify-between gap-10 mb-3 pt-3 border-secondary-plum-disabled border-t-[1px]'>
        <ButtonComponent buttonType="outlined" onClick={()=>dispatch(removeCartItem(id))}>Remove item</ButtonComponent>
        <ButtonComponent buttonType="outlined" onClick={()=>dispatch(addItemToFavorite(product))}>Save for later</ButtonComponent>
      </div>
    </div>
  )
}

export default CartItemComponent