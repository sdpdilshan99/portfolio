"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
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
    <div className="flex flex-col items-center pt-32">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile-img"
          className=" rounded-full w-32"
        />
      </div>
      <h3 className="flex items-center text-xl md:text-2xl font-Outfit">Hi,</h3>

      <h1 className="flex items-center gap-2 text-xl md:text-4xl tracking-wide font-Outfit">
        I'm Sadeep Dilshan
        <Image src={assets.hand_icon} alt="hand-image" className=" w-6" />
      </h1>

      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-Outfit text-violet-600 tracking-wide">
        Full Stack Developer
      </h1>

      <p className=" max-w-2xl mx-auto pt-4 font-Outfit tracking-wide">
        I am a frontend developer from Tangalle, Sri Lanka with 6 months of
        experience
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6 mt-28">
        <a
          href="#contact"
          className="primary-btn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Contact me
          <Image src={imgSrc} alt="right-arrow-icon" className=" w-4 " />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className=" primary-btn second-btn "
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          Get CV
          <Image src={imgSrc1} alt="download-icon" className=" w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
