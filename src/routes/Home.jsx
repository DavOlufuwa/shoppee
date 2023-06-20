import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Categories from './Categories'

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