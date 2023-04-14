import { East, FmdGoodOutlined, HorizontalRuleSharp } from '@mui/icons-material'
import { Card, CardActionArea, CardContent, CardMedia, Divider , Button } from '@mui/material'
import React from 'react'
import { Property } from '../data/Property'
import Bedroom from '../assets/icons-small/bedroom.svg'
import Toilet from '../assets/icons-small/bathroom.svg'
import Balcony from '../assets/icons-small/balcony.svg'

const Properties = () => {
  return (
    <div className='px-8'>
      <section className='uppercase text-xl'><HorizontalRuleSharp fontSize='large'/> Popular</section>
      <section className='flex justify-between my-5'>
        <div>Our Popular Properties</div>
        <div className='flex items-center'>Explore All<East/></div>
      </section>
      <section className='flex flex-col gap-10'>
        {
          Property.map((house=>(
            <Card key={house.id} className='shadow-none bg-white'>
               <CardMedia 
                component="img"
                image={house.img}
               /> 
              <CardContent className='text-xl'>
                <div className='flex items-center justify-between pb-3 border-b-2 border-green-300'>
                  <FmdGoodOutlined/> {house.address}
                </div>
                <div className='text-[12px] flex justify-between mt-3 text-custom-grey'>
                  <div  className='flex items-center'><span className='mr-0.5'><img src={Bedroom}/></span>{house.options[0]}</div>
                  <div className='flex items-center'><span className='mr-0.5'><img src={Toilet}/></span>{house.options[1]}</div>
                  <div className='flex items-center'><span className='mr-0.5'><img src={Balcony}/></span>{house.options[2]}</div>
                </div>
              </CardContent>
              <CardActionArea className='flex justify-between items-center'>
                <div className='text-2xl'>
                  {house.price}
                </div>
                <Button variant="outlined" className='bg-green-200 shadow-none text-base capitalize text-custom-mid font-bold border-2 border-custom-light px-6 rounded-sm py-2'>Book now</Button>
              </CardActionArea>
            </Card>
          )))
        }
      </section>
    </div>
  )
}

export default Properties