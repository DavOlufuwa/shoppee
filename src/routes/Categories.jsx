import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ButtonComponent from '../components/ButtonComponent'
import homeCategories from '../data/homepage.json'

const Categories = () => {
  const {item} = useSelector((store) => store.shop)

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
                state={
                  {
                    category: slug,
                    categoryTitle: title
                  }
                }
              >
              <ButtonComponent className="outlined-btn-one" buttonType="outlined">
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