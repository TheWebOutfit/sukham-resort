import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='flex flex-col sticky z-10 sm:flex-row justify-between content-center items-center  text-center bg-red-200'>
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
            <Link to="./Contact">Contact</Link>

            </div>
        </div>
    </div>
  )
}

export default Navbar