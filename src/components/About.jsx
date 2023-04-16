import { Card, CardActions, CardContent, CardMedia ,Button, CardHeader} from '@mui/material'
import React from 'react'
import Greenhouse from '../assets/images/green-house.png'
import { AboutUs } from '../data/About'

const About = () => {
  return (
    <div className='px-6 py-16 flex flex-col gap-20 tablet:px-16 palmtop:flex-row palmtop:gap-10 laptop:px-32'>
      <section className='palmtop:w-full'>
        <Card className='bg-gray-100 border-none shadow-none rounded-lg'>
          <CardContent className='pl-6'>
            <p className='text-3xl font-bold mr-2 my-3.5'>The new way to find your new home</p>
            <p className='text-base mr-5'>Find your dream place to live in with more than 10k+ properties listed.</p>
          </CardContent>
          <CardActions className='pl-6'>
            <Button variant='contained' className='py-3 px-8 rounded-lg bg-custom-mid capitalize shadow-none '>Browse Properties</Button>
          </CardActions>
          <CardMedia 
            component="img"
            image={Greenhouse}
          />
        </Card>
      </section>
      <section className='flex flex-col gap-10 palmtop:grid grid-cols-2'>
        {
          AboutUs.map(info=>(
            <Card key={info.id} className='shadow-none bg-transparent'>
              <CardMedia
                component="img"
                image={(info.imgUrl)}
                className='w-16 h-auto ml-3'
              ></CardMedia>
              <CardContent>
              <p className='text-2xl font-bold mr-2 my-3.5'>{info.title}</p>
              <p className='text-base'>{info.information}</p> 
              </CardContent>
            </Card>
          ))
        }
      </section>
    </div>
  )
}

export default About