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
        I'm a Full-Stack Developer specializing in the MERN stack and modern AI integration. 
        I build high-performance web applications using React Router 7, Angular 19, and 
        leverage AI tools like ChatGPT and Gemini to optimize code quality. 
        Let's turn your ideas into reality with scalable, future-ready solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className={`group service-card rounded-lg p-6 transition-all transform hover:scale-105 duration-500
              ${isDarkMode 
                ? "bg-gradient-to-br from-gray-900 via-violet-950 to-indigo-950 border border-white/10" 
                : "bg-gradient-to-br from-violet-400 via-indigo-500 to-purple-600 shadow-lg shadow-gray-400"
              }`}
          >
            <div>
              <Image src={icon} alt={title} className="w-14 mb-4 transition-transform group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
              <p className="text-sm text-gray-100 leading-relaxed mb-6">
                {description}
              </p>
            </div>
            {/* Read more link එක හැමවෙලේම card එකේ පහළටම එනවා */}
            <a href={link} className="flex items-center gap-2 text-sm text-white font-semibold group">
              Read more
              <Image
                src={assets.right_arrow}
                className="w-4 transition-transform group-hover:translate-x-1"
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
