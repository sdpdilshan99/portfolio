"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";

function NavBar() {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header-bg-color"
          className="w-full"
        />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-10 mt-1 flex items-center justify-between z-50 ">
        <a href="">
          <Image
            src={assets.logo}
            alt="name-logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <div className=" ">
          <ul
            className="hidden md:flex items-center gap-5 lg:gap-7 rounded-full px-8 py-1.5
        bg-white shadow-sm bg-opacity-50"
          >
            <li>
              <a href="#top" className="font-Montserrat">
                Home
              </a>
            </li>
            <li>
              <a href="#top" className="font-Montserrat">
                About me
              </a>
            </li>
            <li>
              <a href="#top" className="font-Montserrat">
                Services
              </a>
            </li>
            <li>
              <a href="#top" className="font-Montserrat">
                Projects
              </a>
            </li>
            <li>
              <a href="#top" className="font-Montserrat">
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
            <Image src={assets.menu_black} alt="mecu-icon" className="w-6" />
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
            <a href="#top" onClick={closeMenu} className="font-Montserrat">
              Home
            </a>
          </li>
          <li>
            <a href="#top" onClick={closeMenu} className="font-Montserrat">
              About me
            </a>
          </li>
          <li>
            <a href="#top" onClick={closeMenu} className="font-Montserrat">
              Services
            </a>
          </li>
          <li>
            <a href="#top" onClick={closeMenu} className="font-Montserrat">
              Projects
            </a>
          </li>
          <li>
            <a href="#top" onClick={closeMenu} className="font-Montserrat">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
