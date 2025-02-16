"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function NavBar() {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header-bg-color"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 h-9 lg:px-8 xl:px-10 mt-1 flex items-center justify-between z-50 
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}
      >
        <a href="">
          <Image
            src={assets.logo}
            alt="name-logo"
            className="w-28 cursor-pointer mr-14 "
          />
        </a>

        <div className=" ">
          <ul
            className="hidden md:flex items-center
            shadow-sm bg-opacity-50 text-[20px] text-[#140530]"
          >
            <li>
              <a
                href="#home"
                className="font-Outfit font-normal hover:bg-violet-500 hover:rounded-sm py-1 px-3 hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-Outfit hover:bg-violet-500 hover:rounded-sm py-1 px-3 hover:text-white"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="font-Outfit hover:bg-violet-500 hover:rounded-sm py-1 px-3 hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="font-Outfit hover:bg-violet-500 hover:rounded-sm py-1 px-3 hover:text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-Outfit hover:bg-violet-500 hover:rounded-sm py-1 px-3 hover:text-white"
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="moon-icon" className="w-6" />
          </button>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu-icon" className="w-6" />
          </button>
        </div>

        {/* mobile menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-8 fixed -right-64
        top-0 bottom-0 w-56 z-50 h-screen bg-violet-300 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a href="#home" onClick={closeMenu} className="font-Montserrat">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="font-Montserrat">
              About me
            </a>
          </li>
          <li>
            <a href="#service" onClick={closeMenu} className="font-Montserrat">
              Services
            </a>
          </li>
          <li>
            <a href="#project" onClick={closeMenu} className="font-Montserrat">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="font-Montserrat">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
