import React from "react";
import aboutImg from "../assets/imgSir1.webp";

const About = () => {
    
  return (
    <div className="mx-auto bg-gray-200  p-8 " id="about">
      <h1 className="flex justify-center items-center  text-gray-700 font-bold mb-5 text-5xl font-serif">About Us</h1>
      <div className="md:grid md:grid-cols-2 md:mb-4 items-center justify-between space-x-9 flex flex-col  ">
        <img className="flex rounded-lg shadow-lg shadow-gray-600" src={aboutImg} alt="SUKHAM" />
        <div className="mt-2">
          <h2 className=" text-2xl text-gray-700 font-bold mb-5 border-b-4 border-black w-fit">
            We are <span className="text-gold text-6xl">SUKHAM</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            fugiat iusto reprehenderit dignissimos perspiciatis, laboriosam
            harum ex quam eligendi amet fuga beatae ea consequuntur corporis at
            nihil, repellat veniam doloribus. Voluptatem esse laboriosam quasi
            id, quae quis fugiat ea impedit dignissimos consectetur qui
            necessitatibus cupiditate quam maxime officiis, expedita iure
            debitis aperiam voluptatum? Harum, ea officiis! Odit sequi
            laboriosam harum velit asperiores. Odio consequatur nulla quam fugit
            error architecto modi ratione, voluptatibus obcaecati at est nisi
            quae laboriosam iure, molestiae totam doloremque quasi voluptatem!
            Doloribus repudiandae beatae aliquam, voluptatem ducimus hic
            provident. Laborum deleniti, autem qui eligendi facilis tenetur
            dignissimos.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
