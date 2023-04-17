import { FiberManualRecord, HorizontalRuleSharp } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import { BlogInfo } from '../data/Blog'

const Blog = () => {
  return (
    <div className='mt-20 px-8 tablet:px-16 laptop:px-32' id='blog'>
      <section className="uppercase text-xl flex items-center"><HorizontalRuleSharp fontSize='large'/>OUR BLOG</section>
      <section className="flex justify-between items-center my-5 tablet:mb-0">
        <div className='text-lg tablet:text-2xl'>Latest Information</div>
        <Button variant='contained' className='shadow-none bg-custom-mid text-white text-base capitalize px-6 rounded-md py-2 transition duration-300 hover:bg-custom-light hover:text-custom-buttonbg  hover:border-custom-mid'>See More</Button>
      </section>
      <section className='text-base text-custom-grey font-normal tablet:text-lg tablet:font-normal  tablet:w-1/2 mb-6'>Stay up to date with all the information about our listed properties</section>

      <section className='flex flex-col gap-8 laptop:grid laptop:grid-cols-3'>
        {
          BlogInfo.map(blog=>(
            <Card key={blog.id} className="shadow-none">
                <CardMedia
                  component="img"
                  image={blog.pic}
                />
                <CardContent className='pl-0'>
                  <div className='text-custom-grey font-bold pb-5 w-7/12 border-b border-custom-mid flex items-center gap-2'>
                    <FiberManualRecord sx={{color:'#00DEB6'}}/> {blog.date}
                  </div>
                  <div className='py-4 pb-1 text-xl'>
                    {blog.title}
                  </div>
                </CardContent>
                <CardActions className='pl-0'>
                  <Button variant='outlined' className='bg-custom-buttonbg shadow-none text-base capitalize text-custom-mid font-bold border-2 border-custom-light px-8 rounded-md py-2 transition duration-300 hover:text-custom-buttonbg hover:bg-custom-mid hover:border-custom-background'>Read More</Button>
                </CardActions>
            </Card>
          ))
        }
      </section>
    </div>
  )
}

export default Blog