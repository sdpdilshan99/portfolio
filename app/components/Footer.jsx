import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div
      className={`mt-20 ${
        isDarkMode
          ? ""
          : "bg-gradient-to-bl from-violet-300 via-violet-400 to-violet-500 "
      }`}
    >
      <div className="text-center pt-1">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-20 mx-auto"
        />

        <div className="flex justify-center items-center gap-2  mb-2">
          <Image src={assets.mail_icon} alt="mail-icon" className="w-5" />
          <a
            href="mailto:sdpdilshan.rcc@gmail.com"
            className="text-white text-sm "
          >
            sdpdilshan.rcc@gmail.com
          </a>
        </div>
      </div>

      <div
        className="text-center sm:flex sm:items-center sm:justify-between border-t 
      border-white mx-[10%] py-1"
      >
        <p className="font-Outfit text-white text-xs sm:text-sm flex items-center justify-center">
          <span className="mr-1">©</span> 2025 Sadeep Dilshan. All rights
          reserved.
        </p>

        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/sdpdilshan99"
              className="font-Outfit text-white hover:text-purple-300 transition duration-300 text-xs sm:text-sm"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sdpdilshan99/"
              className="font-Outfit text-white hover:text-purple-300 transition duration-300 text-xs sm:text-sm"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
