import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { data } from '../utils/data';

const Places = () => {
  const {id} = useParams();
  const [placesData, setPlacesData] = useState({});

  useEffect(() => {
    let placeData = data.find((places) => places.id === parseInt(id));
    if (placeData) {
      setPlacesData(placeData);
    }
  }, []);

  console.log(id);
  console.log(placesData);
  return (
    <div  >
      <div className=' flex justify-center my-6 mx-6 '>
      <img className='rounded-xl' src={placesData.img} alt="" />
      </div>
      <div className='lg:mx-32 md:mx-16 sm:mx-12 mx-5 mb-3 '>
      <div className='flex justify-center  text-justify  '>
     
      { 
        placesData.description
      }
      </div>
      </div>
      </div>
    
  )
}

export default Places