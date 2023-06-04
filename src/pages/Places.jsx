import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../utils/data";
import { WidthFull } from "@mui/icons-material";

const Places = () => {
  const { id } = useParams();
  const [placesData, setPlacesData] = useState({});

  useEffect(() => {
    let placeData = data.find((places) => places.id === parseInt(id));
    if (placeData) {
      setPlacesData(placeData);
    }
  }, []);

  return (
    
    <div
      className="mx-auto   p-8 "
      id="about"
    >
      <h1 className="flex justify-center items-center  text-gray-900 font-bold mb-[2.25rem] text-5xl font-serif ">
        <span className="border-b-4 mt-2 border-black border-double">
          {placesData.title}
        </span>
      </h1>
      <div className="md:grid md:grid-cols-2 md:mb-4 items-center justify-between space-x-9 flex flex-col  my-3">
        <img
          className="flex rounded-lg shadow-lg shadow-gray-600"
          src={placesData.img}
          alt="SUKHAM"
        />
        <div className="mt-2">
          
          <p className="text-gray-900 text-lg">
          {placesData.description}
          </p>
          
          
        </div>

      </div>
      <div className="flex justify-center items-center w-full m-8 p-2 bg-gray-400 bg-opacity-10 shadow-md shadow-gray-500 ml-1 rounded-lg ">

        {placesData.map && 
        <iframe src={placesData.map} style={{width:'100%'}} height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      }
      </div>
    </div>
  );
};


export default Places;
