
import { Link } from 'react-router-dom';

const GalleryImage = ({data : {id, img}}) => {


  return (
    
    <div className="rounded-md shadow-lg object-cover hover:scale-110">
      
        <Link to={`/place/${id}`}>
          <img
            className="w-full h-48 object-cover rounded-xl transition ease-in-out duration-200"
            src={img}
            
          />
        </Link>
     
    </div>
  );
};

export default GalleryImage;
