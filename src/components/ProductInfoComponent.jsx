import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, decreaseQuantity, increaseQuantity, removeCartItem } from '../features/cartSlice';
import ButtonComponent from './ButtonComponent'

const ProductInfoComponent = ({product}) => {

  // const { cartItems } = useSelector((state)=> state.cart)
  const dispatch = useDispatch()
  
  const [productInfo, setProductInfo] = useState(product)
  
  const {name, imageUrl, price, size, quantity} = productInfo;

  const increaseProductQuantity = () => {
    setProductInfo({...productInfo, quantity: quantity + 1})
  }
  
  const decreaseProductQuantity = () => {
    if(quantity === 1){
      return
    }
    setProductInfo({...productInfo, quantity: quantity - 1})
  }

  return (
    <div className='min-h-screen flex flex-col items-center px-10'>
      <section className='w-full h-[500px]'>
        <img src={imageUrl} alt={name} className='w-full h-full object-fill'/>
      </section>
      <article className='flex justify-start w-full py-2 border-secondary-plum-disabled border-b-[1px]'>
        <div>
          <h1 className='text-2xl font-extrabold'>{name}</h1>
          <h3 className='text-xl font-bold text-[#717171]'>&#8358;{price}</h3>
        </div>
      </article>
      <section className='w-full flex flex-col gap-4 py-3'>
        <div>
          <div className='text-lg font-bold flex gap-3 items-center border-secondary-plum-disabled border-b-[1px] py-4'>Available Sizes: {size.map((s, index) => <span key={index} className='text-lg text-[#717171] '>{s}</span>)}</div>
        </div>
        <div className="">
          <div className='flex justify-between items-center border-secondary-plum-disabled border-b-[1px] pt-3 pb-6'> 
            <div className='text-lg font-bold'>
              Quantity
            </div>
            <div className='counter'>
              <span onClick={decreaseProductQuantity} className={quantity === 1  && 'cursor-not-allowed'}><i className='material-icons'>remove</i></span>
              <span>{quantity}</span>
              <span onClick={increaseProductQuantity}><i className='material-icons'>add</i></span>
            </div>
          </div>
          <div className='flex justify-between items-center border-secondary-plum-disabled border-b-[1px] py-4'>
            <span className='text-lg font-bold capitalise'>Total Item Price:</span>
            <span className='text-xl font-bold'> &#8358;{price * quantity} </span> 
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <ButtonComponent buttonType="outlined" onClick={() => dispatch(removeCartItem(productInfo))}>Remove Item</ButtonComponent>
          <ButtonComponent buttonType="contained" onClick={() => dispatch(addCartItem(productInfo))}>{`Add Item${quantity === 1 ? "" : "s"} to cart`}</ButtonComponent>
        </div> 
      </section>
    </div>
  )
}

export default ProductInfoComponent