import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, decreaseQuantity, removeCartItem } from '../features/cartSlice';
import ButtonComponent from './ButtonComponent'

const ProductInfoComponent = ({product}) => {

  const { cartItems } = useSelector((state)=> state.cart)
  
  const {id, name, imageUrl, price, size, quantity} = product;
  const dispatch = useDispatch()

  
  return (
    <div>
      <section>
        <img src={imageUrl} alt={name}/>
      </section>
      <section>
        <div>
          <div>Available Sizes: {size.map((s, index) => <span key={index}>{s}</span>)}</div>
        </div>
        <div>
          <div className='bg-primary-brand'> 
            <span onClick={() => dispatch(addCartItem(id))}><i className='material-icons'>remove</i></span>
            <span>{quantity ? quantity : 0}</span>
            <span onClick={() => dispatch(addCartItem(id))}><i className='material-icons'>add</i></span>
          </div>
          <div>
            PRICE: &#8358;{price}
          </div>
        </div>
        <div>
          <ButtonComponent buttonType="outlined">{`Add Item${quantity > 1 && "s"} to the cart`}</ButtonComponent>
        </div> 
      </section>
    </div>
  )
}

export default ProductInfoComponent