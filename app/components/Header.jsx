"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Header = ({ isDarkMode }) => {
  const [imgSrc, setImgSrc] = useState(assets.right_arrow_white);
  const [imgSrc1, setImgSrc1] = useState(assets.download_icon);

  const handleMouseEnter = () => {
    setImgSrc(assets.right_arrow_bold);
  };
  const handleMouseEnter1 = () => {
    setImgSrc1(assets.download_icon_white);
  };

  const handleMouseLeave = () => {
    setImgSrc(assets.right_arrow_white);
  };
  const handleMouseLeave1 = () => {
    setImgSrc1(assets.download_icon);
  };

  const workSide = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Mern Stack Developer",
    "UI/UX Designer",
  ];

  return (
    <div id="home" className="flex flex-col items-center pt-32 mb-10">
      <div className="mb-5">
        <Image
          src={assets.profile_img}
          alt="profile-img"
          className=" rounded-full w-32"
        />
      </div>
      <h3 className="text-center text-xl  ">Hi,</h3>

      <h1 className="flex text-center gap-2 text-xl sm:text-3xl lg:text-4xl tracking-wide mb-5">
        I'm Sadeep Dilshan
        <Image
          src={assets.hand_icon}
          alt="hand-image"
          className="w-4 lg:w-8 sm:w-6"
        />
      </h1>

      <h1
        className={` text-center text-4xl sm:text-5xl lg:text-6xl font-[500] tracking-wide
      ${isDarkMode ? "text-violet-400" : "text-violet-700"} `}
      >
        Full Stack Developer
      </h1>

      <p className=" max-w-2xl mx-auto pt-4 font-Outfit tracking-wide"></p>

      <div className="flex flex-col sm:flex-row items-center gap-6 mt-20">
        <a
          href="#contact"
          className="primary-btn font-Outfit"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Contact me
          <Image src={imgSrc} alt="right-arrow-icon" className=" w-4 " />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className=" primary-btn second-btn  font-Outfit"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          Get CV
          <Image src={imgSrc1} alt="download-icon" className=" w-4" />
        </a>
      </div>

      <div className="flex mt-10 gap-4">
        <a href="" className="">
          <Image
            src={isDarkMode ? assets.twitter_dark_icon : assets.twitter_icon}
            alt="twitter-icon"
            className="w-5"
          />
        </a>

        <a href="">
          <Image
            src={assets.instagram_icon}
            alt="intsta-icon"
            className=" w-5"
          />
        </a>
        <a href="">
          <Image src={assets.facebook_icon} alt="fb-icon" className=" w-5" />
        </a>
        <a
          href="https://linkedin.com/in/sadeeprdilshan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={assets.linkedin_icon}
            alt="linkedin-icon"
            className=" w-5"
          />
        </a>
        <a
          href="https://github.com/sdpdilshan99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={isDarkMode ? assets.github_dark_icon : assets.github_icon}
            alt="github-icon"
            className=" w-5"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
