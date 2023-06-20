import React from 'react'
import { Link } from 'react-router-dom'
import Logo  from '/assets/icons/logo-white.svg'

const Navigation = () => {
  return (
    <div className='navigation-bar fixed top-0 w-full z-10 bg-background-secondary flex justify-between items-center px-10 py-4 shadow-md shadow-primary-brand-disabled'>
      <div className='flex items-center w-36 cursor-pointer'>
        <img src={Logo} alt='logo' className=''/>
      </div>
      <nav className='flex gap-5'>      
        <Link to="/" className='nav-link'>Explore</Link>
        <Link to="/" className='nav-link'>Sign Up</Link>
        <Link to="/" className='nav-link'>Sign In</Link>
        <Link to="/" className='nav-link'>About</Link>
        <Link to="/" className='nav-link'>Contact</Link>
      </nav>
      <div className='mobile-btn'><i className='material-icons'>expand_more</i></div>
    </div>
  )
}

export default Navigation