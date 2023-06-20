import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import Navigation from '../components/Navigation'
import ProductCardComponent from '../components/ProductCardComponent'

const Categories = () => {
  return (
    <div>
    <Navigation />
      <ButtonComponent
        buttonType='disabled'
      >Hello There</ButtonComponent>
      <ProductCardComponent/>   
    </div>
  )
}

export default Categories