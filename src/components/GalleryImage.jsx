import React from 'react'
import { useNavigate } from 'react-router-dom'

const GalleryImage = ({img : {img}}) => {

  const navigate = useNavigate();

  return (
    <div className='  cursor-pointer'>
      <img className='hover:scale-110 transition ease-in-out delay-150 duration-300 ' src={img} alt="" 
        onClick={navigate('/')}
      />

    </div>
  )
}

export default GalleryImage