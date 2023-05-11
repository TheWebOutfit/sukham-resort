import PoolIcon from '@mui/icons-material/Pool';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const HotelFeatures = () => {
  return (
    <div>
      
      <h1 className='text-center text-4xl font-bold p-5'>
        Resort Features
      </h1>
    <div className='flex justify-center p-5'>


        <PoolIcon fontSize="large" />
        <RoomServiceIcon fontSize="large" />
        <FoodBankIcon fontSize="large" />
        <LocalCafeIcon fontSize="large" />
        
    </div>
    </div>
  )
}

export default HotelFeatures