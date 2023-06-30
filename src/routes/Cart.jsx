import { CircularProgress, Rating } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent'
import CartItemComponent from '../components/CartItemComponent'
import SignInComponent from '../components/SignInComponent'

const Cart = () => {
  const {cartItems, total} = useSelector((state) => state.cart)
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)

  if(cartItems.length === 0){
    return(
      <div className='w-full min-h-screen flex flex-col gap-4 items-center justify-center'>
        <p className='text-3xl text-primary-brand font-bold'>You Don't Have Any Items in the Cart</p>
        <ButtonComponent 
          buttonType="contained" 
          style={{width: 'max-content'}}
          onClick={()=>navigate("/")}

        >
          Continue Shopping
        </ButtonComponent>
      </div>
    )      
  }

  return (
    <div className='relative mt-[120px] flex flex-col gap-3 px-10 tablet:mx-[120px] palmtop:mx-[200px] laptop:mx-[400px]'>
      {
        cartItems.map((item)=> <CartItemComponent key={item.id} product={item}/>)
      }
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <h1 className='text-2xl '>
            Total:
          </h1>
          <h2 className='text-2xl font-bold'>
            &#8358;{total}
          </h2>
        </div>
        <ButtonComponent  buttonType="contained" onClick={()=>setModalOpen(true)}>Pay Now</ButtonComponent>
      </div>
      <div className={`bg-primary-brand-hover fixed bg-opacity-95 z-50 bg top-0 left-0 min-w-full min-h-screen ${modalOpen ? 'flex' : 'hidden'} items-center justify-center`}>
        <SignInComponent closeModal={setModalOpen}/>
      </div>
    </div>
  )
}

export default Cart