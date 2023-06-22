import { CircularProgress } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { axiosCartItems } from '../features/shopSlice'

const Home = () => {

  return (
    <>
      <Navigation/>
      <main className='mt-24 tablet:mt-16'>
        <Outlet />
      </main>
    </>
  )
}



export default Home