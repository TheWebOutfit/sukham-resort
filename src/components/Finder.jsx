import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';

const Finder = ({ jobs: { salary, title, jobType, description, time } }) => {
  return (
    <>
    <div >
      <div className="flex justify-center flex-wrap items-center py-10">
        <div className=" singleJob w-[250px] p-[20px] bg-white rounded-md shadow-lg shadow-gray-400">
          <span className="flex justify-between items-center gap-4">
            <h1 className="text-lg font-semibold text-black ">{title}</h1>
            <span className="flex items-center text-black gap-1"><AccessTimeIcon />{time}</span>
          </span>
          <h6 className="text-black">{jobType}</h6>
          <p className="text-[13px] text-black pt-[20px] border-t-[2px] mt-[20px]">
            {description}
          </p>
          <div>
            <p className="text-[13px] text-black mt-3"><span className="font-bold">Salary :</span> {salary}</p>
          </div>
          <button className="border-[2px] rounded-md black p-2 w-full bg-black text-white text-sm font-semibold mt-4">
            <Link to='https://form.jotform.com/231376614933459'>Apply Now</Link>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Finder;
