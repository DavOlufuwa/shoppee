import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo  from '/assets/icons/logo-white.svg'

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false)  
  return (
    <header>
      <div className='nav-container'>
        <div className='logo-box flex items-center w-36 cursor-pointer'>
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
      <div 
        className="mobile-btn"
        onClick={() => setNavOpen(!navOpen)}
      ><i className='material-icons'>expand_more</i>
      </div>
    </header>
  )
}

export default Navigation