import { Card, CardActions, CardContent, CardMedia ,Button} from '@mui/material'
import React from 'react'
import Greenhouse from '../assets/images/green-house.png'

const About = () => {
  return (
    <div className='p-6'>
      <section>
        <Card className='bg-gray-100 border-none shadow-none '>
          <CardContent>
            <p className='text-3xl font-bold mr-2 my-3.5'>The new way to find your new home</p>
            <p className='text-base mr-5'>Find your dream place to live in with more than 10k+ properties listed.</p>
          </CardContent>
          <CardActions>
            <Button variant='contained' className='py-3 px-8 rounded-lg bg-custom-mid capitalize shadow-none '>Browse Properties</Button>
          </CardActions>
          <CardMedia 
            component="img"
            image={Greenhouse}
          />
        </Card>
      </section>
      <section>
        
      </section>
    </div>
  )
}

export default About