import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';

// Rohan edit
const jobs = [
    {
      id: 1,
      salary: "20-25k",
      title: "Manager",
      jobType: "On Spot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nemo dolores officia facilis vitae. Placeat rerum repellat cumdoloremque nostrum. Illo ex dolorum quibusdam numquam!",
      time:'now'
    },
    {
      id: 2,
      salary: "20-25k",
      title: "Gardner",
      jobType: "On Spot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nemo dolores officia facilis vitae. Placeat rerum repellat cumdoloremque nostrum. Illo ex dolorum quibusdam numquam!",
      time:'now'
    },
    {
      id: 3,
      salary: "20-25k",
      title: "Laundry",
      jobType: "On Spot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nemo dolores officia facilis vitae. Placeat rerum repellat cumdoloremque nostrum. Illo ex dolorum quibusdam numquam!",
      time:'now'
    },
  ];
const Finder = () => {
    return (
        <div>
            <h1 className="text-center justify-start items-center mt-3 text-5xl font-serif font-bold">Jobs</h1>
            <div className="flex gap-10 justify-center flex-wrap items-center py-10">

                {
                    jobs.map(({ id, title, description, time, jobType, salary }) => {
                        return (
                            <div  key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-md shadow-lg shadow-gray-400">
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
                                <Link to='/JobForm'>Apply Now</Link>
                            </button>
                        </div>   
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Finder;
