import { Rating } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCartItem } from '../features/cartSlice';
import { addItemToFavorite } from '../features/favoriteSlice';
import ButtonComponent from './ButtonComponent'

const ProductInfoComponent = ({product}) => {

  // const { cartItems } = useSelector((state)=> state.cart)
  const dispatch = useDispatch()
  
  const [productInfo, setProductInfo] = useState(product)
  
  const {title, images, price, description, rating, quantity} = productInfo;

  const [mainImage, setMainImage] = useState(images[0])

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
  <div className='min-h-screen flex flex-col items-center px-6
    tablet:px-16 palmtop:flex-row palmtop:gap-20 laptop:px-32 laptop:gap-20'>
      <section className='w-full flex justify-center mt-10'>
        <div className='h-[350px] py-2 pr-2'>
          <img src={mainImage} alt={title} className="h-full w-full transition-fade duration-[3s]"/>
        </div>
        <div className='flex flex-col justify-between items-baseline'>
          {
            images.length > 1 && images.slice(0 , 4).map((image, index) => (
              <div 
                key={index}
                className={`flex items-center justify-center h-20 cursor-pointer p-1 ${image === mainImage ? 'border-2 border-primary-brand' : ''}`}
                onClick={() => setMainImage(image)}
              >
                <img key={index} src={image} alt={title} className='h h-full object-fill'/>
              </div>
            ))
          }  
        </div>
      </section>
      <section className='w-full flex flex-col gap-4 py-3'>
        <article className='flex justify-between w-full py-2 border-secondary-plum-disabled border-b-[1px]'>
          <div>
            <h1 className='text-2xl font-bold'>{title.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}</h1>
            <h3 className='text-xl font-bold text-[#717171]'>&#8358;{price}</h3>
          </div>
            <div>
              <Rating name="read-only" sx={{color: '#b744b8'}} value={Math.floor(rating)} readOnly/>
            </div>
        </article>
        <div>
          <div className='flex gap-3 items-center border-secondary-plum-disabled border-b-[1px] py-4'>
            {description}
          </div>
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
        <div className='flex justify-between items-center gap-4 py-2'>
          <ButtonComponent 
            buttonType="outlined"
            onClick={()=> dispatch(addItemToFavorite(productInfo))}
          >
          Save Item
          </ButtonComponent>
          <ButtonComponent 
            buttonType="contained" 
            onClick={() => dispatch(addCartItem(productInfo))}
          >
            {`Add Item${quantity === 1 ? "" : "s"} to cart`}
            </ButtonComponent>
        </div> 
      </section>
    </div>
    // Add other products I might like inside the something
  )
}

export default ProductInfoComponent