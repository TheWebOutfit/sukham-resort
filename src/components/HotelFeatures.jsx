import PoolIcon from '@mui/icons-material/Pool';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';

const HotelFeatures = () => {
  return (
    <div className='bg-gradient-to-r from-[#E8D5C4] via-[#EAC7C7] to-[#E8D5C4] '>
      
      <h1 className='text-center text-4xl font-bold p-5'>
        Resort Features
      </h1>
    <div className='flex justify-center p-5'>


        <PoolIcon fontSize="large" />
        <RoomServiceIcon fontSize="large" />
        <FoodBankIcon fontSize="large" />
        <LocalCafeIcon fontSize="large" />
        <ElderlyWomanIcon fontSize='large' />
        
    </div>
    </div>
  )
}

export default HotelFeatures