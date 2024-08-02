"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Corevalues from "../public/img/core.png";

const Cores = () => {
  const cores = [
    {
      title: "Customer Focus & Long-Term View",
      description:
        "We ensure we add value and inspire our customers because we recognized that they come to us by choice. We dare to lead with a focus beyond tomorrow and take opportunities to learn and grow.",
      id: 1,
    },
    {
      title: "Quality & Innovation",
      description:
        "We do not compromise on quality. We relentlessly drive for better, fit-for-purpose solutions and breakthrough innovations.",
      id: 2,
    },
    {
      title: "Passion for Excellence",
      description: "To be the best, give the best, all the time.",
      id: 3,
    },
    {
      title: "Customer Focused",
      description: "We ensure every customer is satisfied.",
      id: 4,
    },
    {
      title: "Teamwork",
      description: "We promote an environment of collaboration and respect.",
      id: 5,
    },
    {
      title: "Integrity",
      description: "We are professional, ethical, honest and accountable.",
      id: 6,
    },
  ];

  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="rounded-xl border-2 mt-1 w-full h-auto">
      <h1 className="text-center text-gidiYellow text-2xl font-semibold underline ">
        Our Core Values
      </h1>
      <div className="flex flex-col md:flex-row gap-2 h-auto min-h-[350px]">
        {/* image/text */}
        <div className="flex-2 mt-1 gap-2 h-auto  w-full">
          <div className="">
            {cores.map((core) => (
              <div
                key={core.id}
                className="collapsible-card mx-2 my-2 rounded-lg shadow-md py-2 overflow-hidden bg-slate-200 border-2 border-gidiYellow"
              >
                <div
                  className="header h-8 w-full cursor-pointer flex items-center justify-between   "
                  onClick={() => handleToggle(core.id)}
                >
                  <h1 className=" font-bold text-black ">{core.title}</h1>
                  <span className="text-black">
                    {openId === core.id ? (
                      <FaMinus className="fill-black" />
                    ) : (
                      <FaPlus className="fill-black" />
                    )}{" "}
                  </span>
                </div>

                <p
                  className={`content text-black transition-max-height duration-500 ease-in-out overflow-hidden  text-justify ${
                    openId === core.id
                      ? "max-h-96 border-t border-black"
                      : "max-h-0"
                  }`}
                >
                  {core.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="image  lg:max-w-[300px] w-full flex justify-center">
          <Image
            src={Corevalues}
            alt="gidi core values"
            width={"auto"}
            height={"auto"}
            className="w-[300px] h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Cores;
