import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
const ActivityPack = () => {
  return (
    <div>
      <div name='pricing' className='w-full text-white  bg-gradient-to-r from-[#FFE2E2] via-[#F6F6F6] to-[#A6E3E9]'>
            <div className='absolute'>

            </div>
            <div className='max-w-[1240px] mx-auto py-12'>
                <div className='text-center py-8 text-slate-300'>
                    <h2 className='sm:text-7xl text-5xl uppercase text-[#FFD700] font-bold font-serif'>Pricing</h2>
                    
                   
                </div>
                <div className='grid md:grid-cols-3 '>
                    <div className='bg-white p-8 m-4 rounded-xl shadow-2xl text-slate-900 relative hover:scale-110 ease-out delay-150 duration-200'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm'>1 Day</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$49</p>
                        </div>
                        <p className='text-2xl text-slate-500 py-8'>Lorem ipsum dolor sit amet consectetur.</p>
                        <div>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <button className='w-full py-4 my-4 bg-black text-white rounded-md text-lg'>Buy Now</button>
                        </div>
                    </div>
                    <div className='bg-white p-8 m-4 rounded-xl shadow-2xl text-slate-900 relative hover:scale-110 ease-in-out delay-150 duration-200'>
                        <span className='uppercase px-5 py-3 bg-indigo-200 text-indigo-900 rounded-xl text-md'>3 Days</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$149</p>
                        </div>
                        <p className='text-2xl text-slate-500 py-8'>Lorem ipsum dolor sit amet consectetur.</p>
                        <div>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <button className='w-full py-4 my-4 bg-black text-white rounded-md text-lg'>Buy Now</button>
                        </div>
                    </div>
                    <div className='bg-white p-8 m-4 rounded-xl shadow-2xl text-slate-900 relative hover:scale-110 ease-in-out delay-150 duration-200'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm'>2 Days</span>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$100</p>
                        </div>
                        <p className='text-2xl text-slate-500 py-8'>Lorem ipsum dolor sit amet consectetur.</p>
                        <div>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 text-green-600 mr-5' />Lorem, ipsum dolor.</p>
                            <button className='w-full py-4 my-4 bg-black text-white rounded-md text-lg'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ActivityPack
