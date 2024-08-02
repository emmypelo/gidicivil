"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

import { CiMenuBurger } from "react-icons/ci";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { GrBlog } from "react-icons/gr";
import Logo from "../public/img/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLists = [
    { title: "Home", icon: GrBlog, link: "/list-posts" },
    { title: "About Us", icon: IoCreateOutline, link: "/create-post" },
    { title: "Our Projects", icon: AiOutlineDashboard, link: "/dashboard" },
    { title: "Our Teams", icon: AiOutlineDashboard, link: "/earnings" },
    { title: "Contact Us", icon: AiOutlineDashboard, link: "/followers" },
  ];

  return (
    <div className="w-full fixed border-b-2 border-b-[#ffad00] top-0 z-20">
      <header className="flex items-center justify-between bg-[#ffffff] px-3 py-3 w-full  max-h-12">
        <div className="flex w-[10%] lg:hidden">
          <TfiMenu
            onClick={toggleMenu}
            className="flex ml-3 cursor-pointer lg:hidden fill-yellow-400 font-semibold text-xl"
          />
        </div>
        <div className="lg:w-[10%]  w-1/5  relative bg-white ">
          <Image
            src={Logo}
            alt=""
            width={"auto"}
            height={"auto"}
            className="w-full lg:float-start   relative max-h-12"
          ></Image>
        </div>
        <nav className="hidden lg:flex items-center justify-around md:gap-1 rounded-full bg-[#010101]  w-[80%]">
          {navLists.map((nav) => (
            <Link
              key={nav.title}
              href={nav.link}
              className="transition-all rounded-full md:px-3 py-1 text-lg font-semibold  duration-500 ease-in-out hover:bg-gidiYellow hover:text-white"
            >
              {nav.title}
            </Link>
          ))}
        </nav>
      </header>
      {/* mobile navbar */}
      <div
        ref={menuRef}
        className={`w-1/2 bg-[#010101] absolute top-0 transition-transform duration-300 lg:hidden ${
          menu ? "transform translate-x-0" : "transform -translate-x-full "
        }`}
      >
        {/* menu logo container */}
        <div className="relative menu-logo flex w-full justify-between px-2 h-[49.5px] items-center border-b-[#ffad00]  border-b-2 z-[21] ">
          <div className="cursor-pointer">
            <TfiMenu
              onClick={toggleMenu}
              className="ml-3 fill-yellow-400 font-semibold text-xl"
            />
          </div>
        </div>
        {/* Nav list */}
        <div className="flex flex-col gap-3 w-full items-left cursor-pointer  relative border-b-gidiYellow  border-b-2 border-r-2 border-r-gidiYellow z-40 p-2">
          {navLists.map((nav) => (
            <div
              key={nav.title}
              className="flex w-full transition-all rounded-xl px-3 py-1 text-sm font-semibold gap-4 duration-500 ease-in-out hover:bg-gidiYellow hover:text-white"
              onClick={toggleMenu}
            >
              <nav.icon className="self-center" />
              <Link href={nav.link} className="self-center">
                {nav.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
