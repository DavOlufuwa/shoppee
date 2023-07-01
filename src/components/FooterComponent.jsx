import { Facebook, Twitter, WhatsApp } from '@mui/icons-material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BlackLogo from '/assets/icons/logo-black.svg'

const FooterComponent = () => {
  const navigate = useNavigate() 
  return (
    <footer className='bg-[#000] text-text-primary mt-[40px] px-4 pt-9 flex flex-col items-center gap-3 palmtop:flex-row palmtop:justify-between palmtop:items-center palmtop:pb-6 laptop:px-80'>
      <section>
        <div 
          className='max-w-[150px] cursor-pointer'
          onClick={() => navigate('/')}
        >
          <img src={BlackLogo} alt='logo'/>
        </div>
      </section>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-thin'>
          Give us a call:
        </p>
        <p className='hover:text-primary-brand-hover'>
          +234(0) 8013 489 903
        </p>
      </div>
      <div className='flex gap-4 my-3'>
        <p className='text-lg font-thin'>
          Follow us:
        </p>
        <Link 
          to="https://www.twitter.com" 
          target={"_blank"}
        >
          <Twitter
             sx={{
              color: "#fff",
              ':hover': {
                color: "#d48bd5",
                transition: "0.3s",
              }
            }}
          />
        </Link>
        <Link 
          to={"https://www.facebook.com"} 
          target={"_blank"}
        >
          <Facebook 
             sx={{
              color: "#fff",
              ':hover': {
                color: "#d48bd5",
                transition: "0.3s",
              }
            }}
          />
        </Link>
        <Link 
          to={"https://www.whatsapp.com"} 
          target={"_blank"}         
        >
          <WhatsApp 
            sx={{
              color: "#fff",
              ':hover': {
                color: "#d48bd5",
                transition: "0.3s",
              }
            }}
          />
        </Link>
      </div>

      <section className='text-center mt-3 palmtop:mt-0'>
        <small>
          &copy; 2023 myShoppe Stores 
        </small>
      </section>
    </footer>
  )
}

export default FooterComponent