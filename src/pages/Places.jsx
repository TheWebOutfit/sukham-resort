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
    <div>
      <img src={placesData.img} alt="" />
      {
        placesData.description
      }
    </div>
  )
}

export default Places