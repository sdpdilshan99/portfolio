import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <div
      id="about"
      className={`w-full px-[10%] py-14 scroll-mt-15 
        ${
          isDarkMode
            ? ""
            : "bg-gradient-to-br from-violet-300 via-indigo-400 to-purple-600"
        }`}
    >
      <h2
        className={`text-center text-5xl ${
          isDarkMode ? "text-violet-400" : "text-white"
        } font-semibold mb-8`}
      >
        About Me
      </h2>

      <div className="flex flex-col w-full lg:flex-row items-center justify-center gap-20 my-8">
        <div className="flex w-64 sm:w-80 rounded-3xl max-w-none shadow-lg hover:shadow-2xl transition-all">
          <Image
            src={assets.user_image}
            alt="user-image"
            className="w-full rounded-3xl object-cover"
          />
        </div>
        <div className="flex flex-col text-white">
          <p className="mb-10 max-w-2xl font-Outfit tracking-wide text-justify text-lg">
            Hi, I'm Sadeep, a passionate MERN Stack Developer with expertise in
            building dynamic and scalable web applications. I specialize in both
            front-end and back-end development using MongoDB, Express.js, React,
            and Node.js. My goal is to deliver high-performance, user-friendly
            solutions by writing clean and efficient code. I am always exploring
            new technologies and striving to create seamless, responsive web
            experiences. Let's collaborate and bring your next project to life!
          </p>

          <ul className="grid grid-cols-1 gap-6 max-w-2xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-700 hover:translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl">
              <div className="flex items-center">
                <Image
                  src={assets.edu_icon}
                  alt="edu-hat-icon"
                  className="w-8"
                />
                <h3 className="my-3 mx-3 text-lg font-semibold text-white">
                  Education
                </h3>
              </div>
              <div>
                <p className="text-gray-300 text-md m-1">
                  B.Sc. (General) Degree Program
                </p>
                <p className="text-gray-300 text-md m-1">
                  Following Enterprise Application Development (Diploma Level)
                </p>
                <p className="text-gray-300 text-md m-1">MERN Stack Course</p>
              </div>
            </li>
          </ul>

          <h4 className="mt-10 mb-4 text-2xl font-Outfit text-white">
            Tools I Use
          </h4>
          <ul className="flex items-center gap-6">
            {toolsData.map(({ icon, name }, index) => (
              <li
                key={index}
                className={`flex items-center justify-center w-14 sm:w-16 aspect-square 
                  ${isDarkMode ? "bg-gray-100" : " bg-gray-800"} 
                  rounded-lg cursor-pointer hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-2xl relative group`}
              >
                <Image src={icon} alt="tools" className="w-7 sm:w-9" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-sm text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
