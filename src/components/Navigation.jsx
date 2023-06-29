import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo  from '/assets/icons/logo-white.svg'
import cartIcon from '/assets/icons/fi_shopping-cart.svg'
import FavoriteIcon from '/assets/icons/fi_heart.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotalAmount } from '../features/cartSlice'
import { calculateTotalFavorites } from '../features/favoriteSlice'

const Navigation = () => {
  
  const navigate = useNavigate()

  const dispatch = useDispatch()
  
  const [navOpen, setNavOpen] = useState(false)  

  const {cartItems ,quantity, total} = useSelector((state)=> state.cart) 

  const {favoriteItems, totalFavorites} = useSelector((state)=> state.favorites)

  useEffect(()=>{
    dispatch(calculateTotalAmount())
  },[cartItems])

  useEffect(()=>{
    dispatch(calculateTotalFavorites())
  }, [favoriteItems])


  
  
  return (
    <header>
      <div className='nav-container'>
        <div className='logo-box flex items-center w-36 cursor-pointer' onClick={() => navigate('/')}>
          <img src={Logo} alt='logo' className=''/>
        </div>
      </div>
      <nav className={`nav-block ${navOpen ? "open" : " "}`}>      
        <Link to={"category"} 
        state={{category: "ev"}} className="nav-link">Explore</Link>
        <Link to="authentication" className="nav-link">Sign In</Link>
        <Link to="/" className="nav-link">About</Link>
        <Link to="/" className="nav-link">Contact</Link>
      </nav>
      <div className='icon-containers'>
        <div 
          className='cart-icon cursor-pointer'
          onClick={() => navigate("savedItems")}
        >
          <img src={FavoriteIcon} alt='saved items icon'/>
          <div>{totalFavorites}</div>
        </div>
        <div 
          className='cart-icon cursor-pointer'
          onClick={() => navigate("cart")}
        >
          <img src={cartIcon} alt='cart icon'/>
          <div>{quantity}</div>
        </div>
      </div>
      <div 
        className="mobile-btn"
        onClick={() => setNavOpen(!navOpen)}
      ><i className='material-icons'>expand_more</i>
      </div>
    </header>
  )
}

export default Navigation