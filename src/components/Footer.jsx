import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Card, CardActions, CardContent, Collapse } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Logowhite from '/assets/logo/Logo-white.svg'
import facebook from '/assets/icons-small/facebook.svg'
import instagram from '/assets/icons-small/instagram.svg'
import twitter from '/assets/icons-small/twitter.svg'
import linkedin from '/assets/icons-small/linked-in.svg'

const Footer = () => {
  const [expand, setExpand] = useState(false)
  const [open, setOpen] = useState(false)
  const [widen, setWiden] = useState(false)


  useEffect(()=>{
    const handleShow = () =>{
      if(window.innerWidth >= 900){
        setExpand(true)
        setOpen(true)
        setWiden(true)
      }
      else if(window.innerWidth < 900){
        setExpand(false)
        setOpen(false)
        setWiden(false)
      }
    }

    window.addEventListener('resize', handleShow)

    return () =>{
      window.removeEventListener('resize', handleShow)
    }
  }, [])

  return (
    <footer className='bg-custom-footer pt-16 '>
      <section className='grid gap-2 mb-7 palmtop:grid-cols-4 tablet:px-16 laptop:px-32'>
        <div className='pl-6 py-3 mb-6'>
          <div className='flex items-center gap-1'>
            <div className='p-1 border-2 rounded-full border-white'>
              <a href='#'><img src={Logowhite}/></a>
            </div>
            <p className='text-xl font-bold text-white'><a href='#'>PropertyForMe</a></p>
          </div>
        </div>
        <div>
          <Card className='bg-transparent shadow-none border-none pl-4 py-0 palmtop:pt-2.5'>
            <CardActions>
              <p onClick={()=>setOpen(!open)} className="cursor-pointer text-lg text-gray-200">Quick Links</p>
              {open ?
                <ExpandMore
                  expand={open}
                  onClick={()=>setOpen(!open)}
                  sx={{color:"#fff"}}
                  className='palmtop:hidden'
                >
                </ExpandMore>
                :
                <ExpandLess
                  className='palmtop:hidden'
                  onClick={()=>setOpen(!open)}
                  sx={{color:"#fff"}}

                >
                </ExpandLess>
              }
            </CardActions>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <CardContent className='py-0 pb-3 grid gap-5 text-lg font-[400] text-gray-300 palmtop:pl-2 palmtop:pt-4'>
                <div><a className='cursor-pointer'>Home</a></div>
                <div><a className='cursor-pointer'>About us</a></div>
                <div><a className='cursor-pointer'>Service</a></div>
                <div><a className='cursor-pointer'>Blog</a></div>
                <div><a className='cursor-pointer'>Help Center</a></div>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div>
          <Card className='bg-transparent shadow-none border-none pl-4 palmtop:pt-2.5'>
            <CardActions>
              <p onClick={()=>setExpand(!expand)} className="cursor-pointer text-lg text-gray-200">Terms & Privacy</p>
              {expand ?
                <ExpandMore
                  expand={expand}
                  onClick={()=>setExpand(!expand)}
                  sx={{color:"#fff"}}
                  className='palmtop:hidden'
                >
                </ExpandMore>
                :
                <ExpandLess
                  onClick={()=>setExpand(!expand)}
                  sx={{color:"#fff"}}
                  className='palmtop:hidden'
                >
                </ExpandLess>
              }
            </CardActions>
            <Collapse in={expand} timeout="auto" unmountOnExit>
              <CardContent className='py-0 pt-2 pb-3 grid gap-5 text-lg font-[400] text-gray-300 palmtop:pl-2 palmtop:pt-4'>
                <div><a className='cursor-pointer'>Trust & Saftey</a></div>
                <div><a className='cursor-pointer'>Terms of Service</a></div>
                <div><a className='cursor-pointer'>Privacy Policy</a></div>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div>
          <Card className='bg-transparent shadow-none border-none pl-4 palmtop:pt-2.5'>
            <CardActions>
              <p onClick={()=>setWiden(!widen)} className="cursor-pointer text-lg text-gray-200">About</p>
              {widen ?
                <ExpandMore
                  expand={widen}
                  onClick={()=>setWiden(!widen)}
                  sx={{color:"#fff"}}
                  className='palmtop:hidden'
                >
                </ExpandMore>
                :
                <ExpandLess
                  onClick={()=>setWiden(!widen)}
                  sx={{color:"#fff"}}
                  className='palmtop:hidden'
                >
                </ExpandLess>
              }
            </CardActions>
            <Collapse in={widen} timeout="auto" unmountOnExit>
              <CardContent className='py-0 pt-2 pb-3 grid gap-5 text-lg font-[400] text-gray-300 palmtop:pl-2 palmtop:pt-4'>
                <div><a className='cursor-pointer'>Company</a></div>
                <div><a className='cursor-pointer'>How it works</a></div>
                <div><a className='cursor-pointer'>Contact Us</a></div>
                <div><a className='cursor-pointer'>Investors</a></div>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </section>
      <section className='flex flex-col px-6 pl-4 py-5 gap-12 items-start  tablet:flex-row-reverse tablet:justify-between tablet:border-t-[2px] tablet:px-20 tablet:items-center laptop:px-32 laptop:py-8'>
        <div className='flex gap-3 p-0 self-start tablet:gap-5 palmtop:gap-8 laptop:gap-10 laptop:pr-20'>
          <span><img src={facebook} className='opacity-50 cursor-pointer'/></span>
          <span><img src={twitter}  className='opacity-50 cursor-pointer'/></span>
          <span><img src={instagram} className='opacity-50 cursor-pointer' /></span>
          <span><img src={linkedin} className='opacity-50 cursor-pointer'/></span>
        </div>
        <div className='text-[12px] font-[500] text-custom-background opacity-50'>
          &copy;2022 PropertyForMe. All rights reserved by Ayomide
        </div>
      </section>
    </footer>
  )
}

export default Footer