import React from 'react'

const GalleryImage = ({img : {id, img, description}}) => {
  return (
    <div className='  cursor-pointer'>
      <img className='hover:scale-110 transition ease-in-out delay-150 duration-300 ' src={img} alt="" />
    </div>
  )
}

export default GalleryImage