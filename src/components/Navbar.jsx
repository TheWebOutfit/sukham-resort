import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('about');
        if (element) {
          
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div className='flex flex-col sticky z-10 sm:flex-row justify-between content-center items-center  text-center bg-gradient-to-r from-[#8294C4] via-[#DBDFEA] to-[#D5B4B4]'>
        <div className='font-bold text-4xl p-3  uppercase '>
            <span className='text-gold '>Sukham</span> Resort
        </div>

        <div className='flex font-semibold font-serif'>
            
            <div className=' m-1 sm:m-3'>
                <Link to={'/'}>
                Home
                </Link>
            </div>
            <div className='m-1 sm:m-3' onClick={handleClickScroll}>
                About Us
            </div>
            <div className='m-1 sm:m-3'>
                <Link to="/Career">Career</Link>
            </div>
            <div className='m-1 sm:m-3'>
            <Link to="/Contact">Contact</Link>

            </div>
        </div>
    </div>
  )
}

export default Navbar