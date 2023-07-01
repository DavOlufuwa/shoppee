import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent'
import CartItemComponent from '../components/CartItemComponent'
import SignInComponent from '../components/SignInComponent'
import { clearCartItems } from '../features/cartSlice'


const Cart = () => {
  const dispatch = useDispatch()
  const {cartItems, total} = useSelector((state) => state.cart)
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)

  if(cartItems.length === 0){
    return(
      <div className='w-full min-h-screen flex flex-col gap-4 items-center justify-center'>
        <p className='px-4 text-3xl text-primary-brand text-center font-bold'>You Don't Have Any Items in the Cart</p>
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
    <>
      <div className='flex justify-between items-center px-6 pt-8'>
        <h2 className=' text-primary-brand text-2xl font-bold'>Your Cart</h2>
        <ButtonComponent 
          buttonType={"contained"}
          onClick={()=> dispatch(clearCartItems())}
        >Empty Cart</ButtonComponent>
      </div>
      <div className='relative min-h-screen mt-[40px] flex flex-col gap-3 px-6 tablet:mx-[120px] palmtop:mx-[200px] laptop:mx-[400px]'>
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
    </>
  )
}

export default Cart