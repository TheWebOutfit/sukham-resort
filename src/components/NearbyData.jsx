import {data} from '../utils/data'
import Gallery from './Gallery';

const NearbyData = () => {
  console.log(data);
  return (
    <div>
      {
            data.map((data) => {
                const {id, img, description} = data;
                <Gallery img={img} key={id} />
            })
        }
    </div>
  )
}

export default NearbyData