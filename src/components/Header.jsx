import { CalendarMonthOutlined, FmdGoodOutlined, MenuOpen } from '@mui/icons-material'
import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Divider } from '@mui/material'
import React, {  useState } from 'react'
import Logo from '/assets/logo/Logo.svg'
import Customers from '/assets/icons-large/customers.svg'
import Properties from '/assets/icons-large/properties.svg'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const html = document.getElementById("html")
  html.style.overflowY = menu ? "hidden" : ""
  html.style.minHeight = menu ? "100%" : ""
  return (
    <div className='relative w-full bg-custom-buttonbg overflow-x-hidden bg-hero  bg-no-repeat bg-left bg-cover palmtop:bg-contain palmtop:bg-right sharp-nav:overflow-x-hidden'>
      <header className='flex border-b-2 border-custom-mid items-center justify-between py-5 px-6 palmtop:px-16 laptop:px-32 '>
        <div>
          <div className='flex items-center gap-1'>
            <div className='p-1 border-2 rounded-full border-custom-mid'>
              <a href='#'><img src={Logo}/></a>
            </div>
              <p className='text-xl font-bold text-custom-mid'><a href="#">PropertyForMe</a></p>
          </div>
        </div>
        <nav className={`flex items-center gap-12 transition duration-300 sharp-nav:z-40 sharp-nav:absolute sharp-nav:right-0 sharp-nav:top-0 sharp-nav:bottom-0 sharp-nav:bg-custom-light sharp-nav:min-h-full sharp-nav:pt-24 sharp-nav:px-14 sharp-nav:gap-16 sharp-nav:flex-col  ${menu ? '' : "sharp-nav:translate-x-full sharp-nav:block" }`}>
          <ul className='flex items-center gap-8 sharp-nav:flex-col'>
            <li className='nav-link' onClick={()=>setMenu(false)}><a href='#'>Home</a></li>
            <li className='nav-link' onClick={()=>setMenu(false)}><a href='#about'>About Us</a></li>
            <li className='nav-link' onClick={()=>setMenu(false)}><a href='#properties'>Properties</a></li>
            <li className='nav-link' onClick={()=>setMenu(false)}><a href='#blog'>Blog</a></li>
            <li className='nav-link' onClick={()=>setMenu(false)}><a href='#agents'>Agents</a></li>
          </ul>
          <div className='flex gap-6 align-baseline sharp-nav:flex-col sharp-nav:items-center  sharp-nav:py-6 sharp-nav:gap-8' >
            <Button variant='outlined' className='capitalize px-10 py-2 text-base font-bold text-custom-deep border-2 border-custom-mid rounded-md transition duration-300 hover:text-custom-buttonbg hover:bg-custom-mid sharp-nav:w-44'>Register</Button>
            <Button variant='contained' className='capitalize px-8 py-2.5 text-base font-bold text-gray-200 bg-custom-mid rounded-md shadow-none transition duration-300 hover:bg-custom-light hover:text-custom-buttonbg  hover:border-custom-mid sharp-nav:w-44 '>Find a Home</Button>
          </div>
        </nav>
        <div className='hidden sharp-nav:z-50 sharp-nav:block absolute right-5 top-5 cursor-pointer palmtop:right-10'
          onClick={()=>setMenu(!menu)}
        >
          <MenuOpen fontSize='large' sx={menu ? {color:"#fff"} : {color:"#029278"} } />
        </div>
      </header>
      <main className="px-5 py-2 tablet:px-16 laptop:px-32">
        <section>
          <section className='text-4xl text-custom-deep mt-10 tablet:mt-16 py-5 pb-7 tablet:w-4/5 palmtop:w-1/2 laptop:w-2/5 laptop:pr-16 laptop:leading-snug'>
            Buy, Rent, or Sell your Property from anywhere 
          </section>
          <p className='text-base tablet:w-1/2 laptop:w-1/3 laptop:pr-[100px]'>
            Find your home within any location, from reliable agents while properties are showcased
          </p>
        </section>
        <ButtonGroup variant='none' className='mt-10 bg-white rounded-ee-none rounded-es-none rounded-ss-md rounded-se-md py-1.5 border-b-4  border-green-100 text-custom-deep'>
          <Button className='nav-link-two text-sm capitalize'>Rent</Button>
          <Button className='nav-link-two text-sm capitalize'>Buy</Button>
          <Button className='nav-link-two text-sm capitalize'>Sell</Button>
        </ButtonGroup>
        <div className='max-w-max bob-shadow palmtop:flex bg-opacity-o'>
          <Card className='rounded-ee-none shadow-none bg-tran rounded-es-none rounded-ss-md rounded-se-md palmtop:rounded-ss-none palmtop:rounded-es-lg palmtop:rounded-se-lg'>
            <CardContent className='px-6'>
              <p className='text-base font-[500] text-custom-grey'>Location</p>
              <div className='flex items-center text-xl gap-4'>Lekki, Lagos <span><FmdGoodOutlined sx={{color:"#808080"}}/></span></div>
            </CardContent>
          </Card>
          <Card className='rounded-ss-none shadow-none rounded-se-none rounded-ee-none rounded-es-none border-b-75' >
            <CardContent className='px-6'>
              <p className='text-base font-[500] text-custom-grey'>When</p>
              <div className='flex items-center text-xl gap-4'>Select Move-in Date<span><CalendarMonthOutlined sx={{color:"#808080"}}/></span></div>
            </CardContent>
          </Card>
          <Card className='py-3 rounded-se-none rounded-ss-none rounded-ee-lg rounded-es-lg shadow-none palmtop:rounded-es-none palmtop:rounded-se-lg'>
            <CardActions className='px-6'>
              <Button variant='contained' className='py-3 px-8 rounded-lg bg-custom-mid capitalize shadow-none transition duration-300 hover:bg-custom-light hover:text-custom-buttonbg  hover:border-custom-mid'>Browse Properties</Button>
            </CardActions>
          </Card>
        </div>
        <section className='flex flex-col mt-10 tablet:flex-row tablet:gap-16'>
          <Card className='bg-transparent border-none shadow-none '>
            <CardMedia
              component="img"
              image={Customers}
              className='w-16'
            />
            <CardContent className='px-0'>
              <p className='text-xl text-custom-mid'>500+ Customers</p>
              <p className='text-base text-custom-deep'>believe in our service</p>
            </CardContent>
          </Card>
          <Card className='bg-transparent border-none shadow-none'>
            <CardMedia
              component="img"
              image={Properties}
              className='w-16'
            />
            <CardContent className='px-0'>
              <p className='text-xl text-custom-mid'>10k+ properties</p>
              <p className='text-base text-custom-deep'>and houses ready for occupancy</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default Header