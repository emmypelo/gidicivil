"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

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
    { title: "Home", icon: GrBlog, link: "/" },
    { title: "About Us", icon: IoCreateOutline, link: "/about" },
    { title: "Our Services", icon: AiOutlineDashboard, link: "/services" },
    { title: "Our Projects", icon: AiOutlineDashboard, link: "/projects" },
    { title: "Our Team", icon: AiOutlineDashboard, link: "/teams" },
  ];

  return (
    <div className="w-[100vw] fixed border-b-2 border-b-[#ffad00] top-0 z-20">
      <header className=" grid md:grid-cols-header grid-cols-header-small  gap-1 items-center justify-between bg-[#ffffff] mx-auto py-2 px-1   h-16">
        {/* menu button */}

        <div className="flex w-full md:hidden">
          <TfiMenu
            onClick={toggleMenu}
            className="flex ml-3 cursor-pointer  md:hidden fill-yellow-400 font-semibold text-xl"
          />
        </div>
        {/* logo */}
        <div className=" relative ">
          <Image
            src={Logo}
            alt="Gidi civil logo"
            width={"auto"}
            height={"auto"}
            className="lg:float-start   relative "
          ></Image>
        </div>
        {/* navlinks */}
        <nav className="hidden md:flex items-center justify-around  rounded-full text-black  mx-auto w-full ">
          {navLists.map((nav) => (
            <Link
              key={nav.title}
              href={nav.link}
              className="transition-all md:px-2 py-1 font-[500] border-b-4 border-transparent duration-500 ease-in-out hover:border-gidiYellow"
            >
              {nav.title}
            </Link>
          ))}
        </nav>
        {/* contact button */}
        <div className="flex w-full justify-stretch  pr-1">
          <button className="text-black bg-[#FAB919] h-[2.5rem]  w-full rounded-md hover:bg-black hover:text-white hover:animate-pulse duration-300 ease-in-out">
            Contact
          </button>
        </div>
      </header>
      {/* mobile navbar */}
      <div
        ref={menuRef}
        className={`w-1/2 absolute top-0 transition-transform duration-300 md:hidden ${
          menu ? "transform translate-x-0" : "transform -translate-x-full "
        }`}
      >
        {/* menu logo container */}
        <div className="relative menu-logo flex w-[65%] justify-between px-2 h-[64px] items-center   z-[21] bg-transparent ">
          <div className="cursor-pointer md:hidden">
            <TfiMenu
              onClick={toggleMenu}
              className="ml-2  fill-yellow-400 font-semibold text-xl"
            />
          </div>
        </div>
        {/* Nav list */}
        <div className="flex flex-col gap-3 w-[65%] items-left cursor-pointer  relative   z-[21] p-2 bg-white border-t-2 border-[#ffad00] border-r-2  border-b-2   h-62">
          {navLists.map((nav) => (
            <div
              key={nav.title}
              className="flex w-full transition-all rounded-sm text-black px-2 py-1 text-sm font-semibold gap-4 duration-500 ease-in-out hover:bg-[#FAB919]"
              onClick={toggleMenu}
            >
              {/* <nav.icon
                className="self-center text-black"
                stroke="black"
                fill="black"
              /> */}
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
