import { CalendarMonthOutlined, FmdGoodOutlined, MenuOpen } from '@mui/icons-material'
import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Divider } from '@mui/material'
import React, { useState } from 'react'
import Logo from '../assets/logo/Logo.svg'
import Customers from '../assets/icons-large/customers.svg'
import Properties from '../assets/icons-large/properties.svg'

const Header = () => {
  const [menu, setMenu] = useState(false)
  console.log(menu)
  return (
    <div className=''>
      <header className='flex border-b-2 border-custom-mid items-center justify-between py-5 px-10 laptop:px-32'>
        <div>
          <div className='flex items-center gap-1'>
            <div className='p-1 border-2 rounded-full border-custom-mid'>
              <img src={Logo}/>
            </div>
            <p className='text-xl font-bold text-custom-mid'>PropertyForMe</p>
          </div>
        </div>
        <nav className={`flex items-center gap-12 transition duration-300 sharp-nav:hidden sharp-nav:z-60 sharp-nav:absolute sharp-nav:right-0 sharp-nav:top-0 sharp-nav:bg-custom-light sharp-nav:min-h-full sharp-nav:pt-24 sharp-nav:px-14 sharp-nav:gap-16 sharp-nav:translate-x-full sharp-nav:z-40  ${menu && 'sharp-nav:block sharp-nav:translate-x-0 '}`}>
          <ul className='flex items-center gap-8 sharp-nav:flex-col'>
            <li className='nav-link'>Home</li>
            <li className='nav-link'>About Us</li>
            <li className='nav-link'>Properties</li>
            <li className='nav-link'>Blog</li>
            <li className='nav-link'>Agents</li>
          </ul>
          <div className='flex gap-6 align-baseline sharp-nav:flex-col sharp-nav:items-center sharp-nav:py-6 sharp-nav:gap-8' >
            <Button variant='outlined' className='capitalize px-10 py-2 text-base font-bold text-custom-deep border-2 border-custom-mid rounded-md sharp-nav:w-44'>Register</Button>
            <Button variant='contained' className='capitalize px-8 py-2.5 text-base font-bold text-gray-200 bg-custom-mid rounded-md shadow-none sharp-nav:w-44'>Find a Home</Button>
          </div>
        </nav>
        <div className='hidden sharp-nav:z-50 sharp-nav:block absolute right-5 top-5 cursor-pointer'
          onClick={()=>setMenu(!menu)}
        >
          <MenuOpen fontSize='large' sx={{color:"#029278"}} />
        </div>
      </header>
      <main className="px-5 py-2 bg-hero bg-center bg-no-repeat bg-cover laptop:bg-right laptop:bg-contain ">
        <section>
          <section className='text-4xl text-custom-deep py-5 pb-7'>
            Buy, Rent, or Sell your Property from anywhere
          </section>
          <p className='text-base'>
            find your home within any location, from reliable agennts while properties are showcased
          </p>
        </section>
        <ButtonGroup variant='none' className=' rounded-ee-none rounded-es-none border-b-4 mt-3 border-green-100 text-custom-deep'>
          <Button className='nav-link text-sm capitalize'>Rent</Button>
          <Button className='nav-link text-sm capitalize'>Buy</Button>
          <Button className='nav-link text-sm capitalize'>Sell</Button>
        </ButtonGroup>
        <div>
          <Card className='rounded-ee-none rounded-es-none rounded-ss-sm rounded-se-sm'>
            <CardContent>
              <p className='text-base text-custom-grey'>Location</p>
              <div className='flex items-center text-xl gap-4'>Lekki, Lagos <span><FmdGoodOutlined sx={{color:"#808080"}}/></span></div>
            </CardContent>
          </Card>
          <Card className='rounded-ss-none  rounded-se-none rounded-ee-none rounded-es-none  ' >
            <CardContent>
              <p className='text-base text-custom-grey'>When</p>
              <div className='flex items-center text-xl gap-4'>Select Move-in Date<span><CalendarMonthOutlined sx={{color:"#808080"}}/></span></div>
            </CardContent>
          </Card>
          <Card className='py-3'>
            <CardActions>
              <Button variant='contained' className='py-3 px-8 rounded-lg bg-custom-mid capitalize shadow-none'>Browse Properties</Button>
            </CardActions>
          </Card>
        </div>
        <section className='mt-10'>
          <Card className='bg-transparent border-none shadow-none '>
            <CardMedia
              component="img"
              image={Customers}
              className='w-20'

            />
            <CardContent>
              <p className='text-xl text-custom-mid'>500+ Customers</p>
              <p className='text-base text-custom-deep'>believe in our service</p>
            </CardContent>
          </Card>
          <Card className='bg-transparent border-none shadow-none '>
            <CardMedia
              component="img"
              image={Properties}
              className='w-20'
            />
            <CardContent>
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