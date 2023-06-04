
import { Link } from 'react-router-dom';

const GalleryImage = ({data : {id, img}}) => {


  return (
    
    <div className="rounded-md shadow-lg object-cover hover:scale-110 ease-out duration-300  shadow-slate-400">
      
        <Link to={`/place/${id}`} >
          <img
            className="w-full h-48 object-cover rounded-xl transition"
            src={img}
            
          />
        </Link>
     
    </div>
  );
};

export default GalleryImage;
