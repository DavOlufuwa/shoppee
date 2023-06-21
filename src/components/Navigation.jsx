import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo  from '/assets/icons/logo-white.svg'
import cartIcon from '/assets/icons/fi_shopping-cart.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotalAmount } from '../features/cartSlice'

const Navigation = () => {
  
  const navigate = useNavigate()

  const dispatch = useDispatch()
  
  const [navOpen, setNavOpen] = useState(false)  

  const {cartItems ,quantity, total} = useSelector((state)=> state.cart) 

  useEffect(()=>{
    dispatch(calculateTotalAmount())
  },[cartItems])

  
  
  return (
    <header>
      <div className='nav-container'>
        <div className='logo-box flex items-center w-36 cursor-pointer' onClick={() => navigate('/')}>
          <img src={Logo} alt='logo' className=''/>
        </div>
      </div>
      <nav className={`nav-block ${navOpen ? "open" : " "}`}>      
        <Link to="/" className="nav-link">Explore</Link>
        <Link to="/" className="nav-link">Sign Up</Link>
        <Link to="/" className="nav-link">Sign In</Link>
        <Link to="/" className="nav-link">About</Link>
        <Link to="/" className="nav-link">Contact</Link>
      </nav>
      <div className='cart-icon cursor-pointer'>
        <img src={cartIcon} alt='cart icon'/>
        <div>{quantity}</div>
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