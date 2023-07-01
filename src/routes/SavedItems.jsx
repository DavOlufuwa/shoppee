import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteCardComponent from '../components/FavoriteCardComponent'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent'

const SavedItems = () => {
  const navigate = useNavigate()
  const {favoriteItems} = useSelector((state) => state.favorites)

  if(favoriteItems.length === 0){
    return(
      <div className='w-full min-h-screen flex flex-col gap-4 items-center justify-center'>
        <p className='px-4 text-3xl text-primary-brand text-center font-bold'>You Have Not Saved Any Items</p>
        <ButtonComponent 
          buttonType="contained" 
          style={{width: 'max-content'}}
          onClick={()=>navigate("/")}

        >
          Continue Shopping
        </ButtonComponent>
      </div>
    )      
  }
  
  return (
    <>
      <h2 className='px-6 py-4 text-primary-brand text-2xl font-bold'>Saved Items</h2>
      <div className='p-6 grid gap-5 grid-cols-2 tablet:grid-cols-3 tablet:p-16 laptop:grid-cols-4'>
        {
          favoriteItems.map((favorite) =>(                  
            <FavoriteCardComponent key={favorite.id} item={favorite} />
          ))
        }
      </div>
    </>
  )
}

export default SavedItems