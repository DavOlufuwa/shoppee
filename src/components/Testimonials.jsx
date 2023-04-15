import { ArrowBack, ArrowForward, HorizontalRuleSharp } from '@mui/icons-material'
import { Clients } from '../data/Testimonies'
import React, { useState } from 'react'
import { Avatar, Button, Card, CardContent, CardMedia, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Rating, TextField } from '@mui/material'

const Testimonials = () => {
  const [rate, setRate] = useState(4) 
  return (
    <>
      <div className='mt-20 px-8 palmtop:px-16 laptop:px-32'>
        <section className="uppercase text-xl flex items-center my-5"><HorizontalRuleSharp fontSize='large'/>Testimonials</section>
        <section className='capitalize text-lg tablet:text-2xl mb-4'>
          What our Clients say about us
        </section>

        <section className='flex flex-col gap-10 laptop:grid laptop:grid-cols-3 mb-10'>
            {
              Clients.map(client=>(
                <Card key={client.id} className="shadow-none">
                    <CardContent className='text-center flex flex-col gap-2 '>
                        <p className='text-base text-center px-0.5'>{client.testimony}</p>
                        <p className='text-xl'>{client.name}</p>
                        <p className='text-base text-custom-grey'>{client.role}</p>
                        <div className='text-base flex items-center justify-center'>
                          <Rating size='small' className='' value={rate}/> 4.8
                        </div>
                    </CardContent>
                    <CardMedia className='flex justify-center'>
                      <Avatar src={client.img} className='h-[80px] w-[80px]'></Avatar>
                    </CardMedia>
                </Card>
              ))
            }
        </section>
        <section className='flex justify-center gap-5 my-10'>
          <Button variant='outlined' className='py-2 border-[2px] border-custom-light'><ArrowBack sx={{color:"#029278"}}/></Button>
          <Button variant='outlined' className='py-2 border-[2px] border-custom-light bg-custom-mid'><ArrowForward sx={{color:"#fff"}}/></Button>
        </section>
      </div>
      <section className='text-center flex flex-col gap-4 bg-custom-buttonbg py-16'>
          <div className='text-custom-mid text-lg'>
            Become Registered
          </div>
          <div className='text-3xl'>Are you a landlord?</div>
          <p className='text-custom-grey text-base px-5'>Discover ways to increase your home's value and get listed. No Spam</p>
          <div className='px-4 pr-7  tablet:max-w-50'>
          <FormControl
            sx={{ m:1}} 
            className="outline-none w-full tablet:max-w-[30rem] bg-white "
            variant='outlined'
            >
            <InputLabel htmlFor="outlined-adornment-password" className='text-gray-400  border-0'>Enter your email address</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              sx={{border: 0 }}
              className='outline-none'
              type='email'
              endAdornment={
              <InputAdornment position="end">
                  <Button variant='contained' className=' bg-custom-mid px-6 shadow-none capitalize'>submit</Button>
              </InputAdornment>
            }
            label="Enter your email address"
            />
          </FormControl>
          </div>
          <p className='text-base font-[700]'>
            Join <span className='text-custom-mid '>10,000+</span> other landlords in our PropertyForMe community
          </p>
      </section>
    </>
  )
}

export default Testimonials