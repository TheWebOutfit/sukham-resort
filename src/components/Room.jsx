import room  from '../assets/hotelroom.jpg'

const Room = () => {
  return (
    <div className='flex flex-col md:flex-row sm:p-10 p-2 items-center m-auto justify-center'>
        <div className=' flex w-3/5 md:w-1/2'>
            <img src={room} alt="" />
        </div>
        <div className='md:w-1/2 md:font-bold md:text-xl mt-6 md:mt-0 md:ml-10 text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque itaque architecto unde, ducimus, dolores, laudantium in eveniet fugit rerum sequi inventore tempora aliquam optio! Possimus pariatur architecto quibusdam magnam optio! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae sapiente delectus modi odio doloribus animi blanditiis atque voluptatibus eligendi recusandae?
        </div>
    </div>
  )
}

export default Room