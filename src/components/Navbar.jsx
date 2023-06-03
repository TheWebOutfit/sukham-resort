import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Navbar = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('about');
        if (element) {

            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [nav, setNav] = useState(false)
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        // <div className='flex flex-col sticky z-10 sm:flex-row justify-between content-center items-center  text-center bg-gradient-to-r from-[#8294C4] via-[#DBDFEA] to-[#D5B4B4]'>
        //     <div className='font-bold text-4xl p-3  uppercase '>
        //         <span className='text-gold'>Sukham</span> Resort
        //     </div>

        //     <div className='flex justify-between ml-4-2  space-x-6 p-2 items-center font-semibold font-serif '>

        //         <ul className='hidden md:flex m-1 space-x-4 '>
        //             <li className='hover:text-gray-200'>
        //                 <Link to="/"  >
        //                     Home
        //                 </Link>
        //             </li>
        //             <li className='hover:text-gray-200'>
        //                 <Link to="/AboutUs"  >
        //                     About
        //                 </Link>
        //             </li>


        //             <li className='hover:text-gray-200'>
        //                 <Link to="/Contact"   >
        //                     Contact Us
        //                 </Link>
        //             </li>
        //             <li className='hover:text-gray-200'>
        //                 <Link to="/Career"   >
        //                     Career
        //                 </Link>
        //             </li>
        //         </ul>
        //     </div>
        //     <div onClick={handleClick} className='md:hidden z-10 flex left-6 ml-4 p-2'>
        //         {!nav ? <FaBars /> : <FaTimes />}
        //     </div>
        //     <ul className={!nav ? 'hidden' : ' top-0 left-0 w-full  bg-gradient-to-r from-[#8294C4] via-[#DBDFEA] to-[#D5B4B4]  flex flex-col justify-center items-center'}>
        //         <li className='py-3 text-2xl font-serif hover:text-gray-200'><Link onClick={handleClick} to="/">
        //             Home
        //         </Link></li>
        //         <li className='py-3 text-2xl font-serif hover:text-gray-200'><Link onClick={handleClick} to="/AboutUs"  >
        //             About
        //         </Link></li>


        //         <li className='py-3 text-2xl font-serif hover:text-gray-200'><Link onClick={handleClick} to="/Contact" >
        //             Contact Us
        //         </Link></li>
        //         <li className='py-3 text-2xl font-serif hover:text-gray-200'><Link onClick={handleClick} to="/Career"  >
        //             Contact Us
        //         </Link></li>
        //     </ul>
        // </div>
        <>
            <nav className="w-full bg-gradient-to-r from-[#8294C4] via-[#DBDFEA] to-[#D5B4B4] shadow-xl shadow-slate-500">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link to="/">
                                <div className='font-bold text-4xl p-3  uppercase '>
                                    <span className='text-gold'>Sukham</span> Resort
                                </div>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center space-x-4 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-2xl ">
                                <li className="text-gray-600 font-bold hover:bg-gray-900 hover:p-2 hover:rounded-lg hover:text-gray-300 ease-in duration-300 ">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="text-gray-600 font-bold hover:bg-gray-900 hover:p-2 hover:rounded-lg hover:text-gray-300 ease-in duration-300">
                                    <Link to="/AboutUs">About Us</Link>
                                </li>
                                <li className="text-gray-600 font-bold hover:bg-gray-900 hover:p-2 hover:rounded-lg hover:text-gray-300 ease-in duration-300">
                                    <Link to="/Career">Career</Link>
                                </li>
                                <li className="text-gray-600 font-bold hover:bg-gray-900 hover:p-2 hover:rounded-lg hover:text-gray-300 ease-in duration-300">
                                    <Link to="/Contact">Contact US</Link>
                                </li>
                            </ul>

                            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                

                                <Link
                                    to="/"
                                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600  rounded-md  hover:scale-110 ease-in duration-150 hover:bg-gray-800 shadow-md shadow-gray-500 "
                                >
                                    Sign in
                                </Link>
                               
                                <Link
                                    to="/"
                                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow-md shadow-slate-500 hover:scale-110 ease-in duration-150 hover:bg-gray-100"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-4 md:flex  ">
                        <Link
                            to="/"
                            className="px-4 py-2 text-white bg-gray-600 hover:bg-gray-800 hover:scale-110 ease-out duration-300 rounded-md shadow-md shadow-gray-500 "
                        >
                            Sign in
                        </Link>
                        <Link
                            to="/"
                            className="px-4 py-2 text-gray-800 bg-white rounded-md  hover:scale-110 ease-out duration-300 hover:bg-gray-100  shadow-md shadow-slate-500"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </nav>
        </>



    )
}

export default Navbar