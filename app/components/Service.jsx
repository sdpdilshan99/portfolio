import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Service = ({ isDarkMode }) => {
  return (
    <div id="service" className="w-full px-[10%] py-14 ">
      <h2 className="text-center text-4xl font-semibold text-violet-400 mb-6">
        My Services
      </h2>

      <p
        className={`text-center max-w-4xl mx-auto mt-5 mb-12 font-Outfit tracking-wide 
      ${isDarkMode ? "text-white" : "text-gray-800"} 
      leading-relaxed`}
      >
        I'm a Full-Stack Developer specializing in the MERN stack (MongoDB,
        Express, React, Node.js). I build fast, scalable web apps that are
        responsive and user-friendly. Let's turn your ideas into reality with
        clean, efficient code.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="service-card rounded-lg p-6 
            bg-gradient-to-br from-violet-400 via-indigo-500 to-purple-600 shadow-lg 
            shadow-gray-500 hover:shadow-gray-500  transition-all transform hover:scale-105 duration-500"
          >
            <Image src={icon} alt={title} className="w-14 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
            <p className="text-sm text-gray-100 leading-5 xl:h-40 overflow-hidden mb-6">
              {description}
            </p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm text-white font-semibold hover:text-indigo-200 transition-colors"
            >
              Read more
              <Image
                src={assets.right_arrow}
                className="w-4 transform transition-transform hover:translate-x-1"
                alt="right-arrow"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
