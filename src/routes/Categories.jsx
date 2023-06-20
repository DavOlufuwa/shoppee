import React from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent'
import homeCategories from '../data/homepage.json'

const Categories = () => {
  return (
    <div className='categories-container'>
      {
        homeCategories.map(({id, title, imageUrl , slug})=>(
          <div key={id} className='category-item'>
            <div className='relative overflow-hidden h-full w-full '>
              <img src={imageUrl} alt={title} className="h-full w-full object-cover "/>
            </div>
            <div className='title'>{title}</div>
            <div className='button'>
                <Link
                  to={"category"}
                  state={{category: slug}}
                >
              <ButtonComponent buttonType="outlined">
                  See All
              </ButtonComponent>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Categories