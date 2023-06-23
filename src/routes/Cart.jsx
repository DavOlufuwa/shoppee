import { CircularProgress, Rating } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent'
import CartItemComponent from '../components/CartItemComponent'

const Cart = () => {
  const {cartItems} = useSelector((state) => state.cart)
  const navigate = useNavigate()

  if(cartItems.length === 0){
    return(
      <div className='w-full min-h-screen flex flex-col gap-4 items-center justify-center'>
        <p className='text-3xl text-primary-brand font-bold'>You Don't Have Any Items in the Cart</p>
        <ButtonComponent 
          buttonType="contained" 
          style={{width: 'max-content'}}
          onClick={()=>navigate(-1)}

        >
          Continue Shopping
        </ButtonComponent>
      </div>
    )      
  }

  return (
    <div className='mt-[120px] flex flex-col gap-3 px-10 items-center'>
      {
        cartItems.map((item)=> <CartItemComponent key={item.id} product={item}/>)
      }
    </div>
  )
}

export default Cart