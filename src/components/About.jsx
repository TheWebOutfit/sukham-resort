import React from "react";
import aboutImg from "../assets/AboutUs/img.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {Link} from 'react-router-dom'

const About = ({data:{description}}) => {
  return (
    <div
      className="mx-auto bg-gradient-to-r from-[#8294C4] via-[#DBDFEA] to-[#D5B4B4]  p-8 "
      id="about"
    >
      <h1 className="flex justify-center items-center  text-gray-900 font-bold mb-[2.25rem] text-5xl font-serif ">
        <span className="border-b-4 mt-2 border-black border-double">
          About Us
        </span>
      </h1>
      <div className="md:grid md:grid-cols-2 md:mb-4 items-center justify-between space-x-9 flex flex-col  my-3">
        <img
          className="flex rounded-lg shadow-lg shadow-gray-600"
          src={aboutImg}
          alt="SUKHAM"
        />
        <div className="mt-2">
          <h2 className=" text-2xl text-gray-900 font-bold mb-5 ">
            We are{" "}
            <span className="text-gold text-6xl border-b-4 border-black w-fit border-double ">
              SUKHAM
            </span>
          </h2>
          <p className="text-gray-900 text-lg">
           {description}
          </p>
          <Link to='/AboutUs'>
          <p className="mt-3 text-xl w-fit hover:border-b-2 hover:border-blue-500 hover:w-fit hover:text-blue-500 hover:cursor-pointer">
            Read More <ArrowRightAltIcon className="hover:text-blue-500" />
          </p>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default About;
