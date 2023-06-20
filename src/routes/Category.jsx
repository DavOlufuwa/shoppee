import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CategoryFieldComponent from '../components/CategoryFieldComponent'

const Category = () => {
  
  const location = useLocation({})
  const category = location.state?.category

  useEffect(()=>{
    
  },[])

  return (
    <div>
      <CategoryFieldComponent />
      "Hellowwww"
    </div>
  )
}

export default Category