import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between content-center items-center  text-center bg-red-200'>
        <div className='font-bold text-4xl p-3 '>
            Sukham Resort
        </div>

        <div className='flex '>
            <div className='m-3'>
                Home
            </div>
            <div className='m-3'>
                Nearby
            </div>
            <div className='m-3'>
                Contact-us
            </div>
        </div>
    </div>
  )
}

export default Navbar