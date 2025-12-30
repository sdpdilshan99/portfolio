import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Project = ({ isDarkMode }) => {
  return (
    <div
      id="project"
      className={`mt-20 w-full px-[10%] py-14 
        ${
          isDarkMode
            ? ""
            : "bg-gradient-to-br from-violet-300 via-indigo-400 to-purple-600"
        }`}
    >
      <h2
        className={`text-center text-4xl font-semibold 
        ${isDarkMode ? "text-violet-400" : "text-white mb-6"}`}
      >
        My Projects
      </h2>
      
      

      <p className="text-justify text-sm sm:text-lg  max-w-4xl mx-auto mt-5 mb-12 text-white tracking-wide leading-relaxed">
        I believe design is more than just aesthetics—it's about creating
        experiences that connect and inspire. Every project I take on is an
        opportunity to craft something unique, blending creativity, strategy,
        and purpose. Take a look through my work, where passion meets
        innovation.
      </p>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 ">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="w-full h-[350px] bg-no-repeat bg-cover bg-center rounded-lg relative 
            cursor-pointer group transform transition-all duration-500 hover:scale-105 
            hover:shadow-2xl shadow-md shadow-gray-700"
          >
            <div
              className="bg-white opacity-80 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
              py-4 px-6 flex items-center justify-between duration-500 group-hover:bottom-7 group-hover:opacity-100
              shadow-sm shadow-gray-500 hover:shadow-sm hover:shadow-gray-300 z-10"
            >
              <div>
                <h2 className="text-md font-semibold text-violet-700">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
              <div
                className="border rounded-full border-gray-500 aspect-square flex w-9 items-center 
                justify-center shadow-gray-500 shadow-md hover:bg-violet-100 hover:scale-110 transition"
              >
                <Image
                  src={assets.send_icon}
                  alt="send-icon"
                  className="w-5 "
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-lg bg-black opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      <a
        href=""
        className=" w-max flex items-center justify-center gap-2 bg-white text-gray-800 
        borderborder-gray-800 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-800 
        duration-500 hover:text-white shadow-sm shadow-gray-800 hover:shadow-lg 
        hover:shadow-gray-800 hover:scale-105"
      >
        show more
        <Image
          src={assets.right_arrow_bold}
          alt="right-arrow"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Project;
