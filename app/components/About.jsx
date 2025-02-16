import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" w-full  px-[8%] py-14 scroll-mt-15 bg-violet-200"
    >
      <h2 className=" text-center text-5xl ">About me</h2>

      <div className="flex flex-col w-full lg:flex-row items-center  gap-20 my-8">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user-image"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className=" mb-10 max-w-2xl  font-Outfit ">
            Hi, I'm Sadeep, a passionate MERN Stack Developer with expertise in
            building dynamic and scalable web applications. I specialize in both
            front-end and back-end development using MongoDB, Express.js, React,
            and Node.js. My goal is to deliver high-performance, user-friendly
            solutions by writing clean and efficient code. I am always exploring
            new technologies and striving to create seamless, responsive web
            experiences. Let's collaborate and bring your next project to life!
          </p>

          <ul className="grid grid-cols-1 gap-6 max-w-2xl">
            <li
              className=" border-[0.5px] border-gray-400 rounded-xl
               p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 
               hover:shadow-black hover:shadow-sm "
            >
              <div>
                <Image src={assets.edu_icon} alt="edu-hat-icon" />
                <h3 className="my-3 text-gray-700">Education</h3>
              </div>
              <div className="">
                <p className="text-gray-500 text-md ">
                  B.Sc. (General) Degree Program
                </p>
                <p className="text-gray-500 text-md ">
                  Following Enterprice Application Development (Diploma Level)
                </p>
                <p className="text-gray-500 text-md ">
                  B.Tech in Computer Science
                </p>
              </div>
            </li>
          </ul>

          <h4 className="mt-10 mb-4 text-gray-700 font-Outfit">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
               rounded-lg cursor-pointer hover:translate-y-1 duration-500"
              >
                <Image src={tool} alt="tools" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
