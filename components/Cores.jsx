"use client";

import { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";

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
    <div className="rounded-xl border-2 mt-1">
      <h1 className="text-center text-gidiYellow">Our Core Values</h1>
      <div className="p-1">
        {cores.map((core) => (
          <div
            key={core.id}
            className="collapsible-card mx-2 my-2 rounded-lg shadow-md p-2 overflow-hidden bg-gidiYellow"
          >
            <div
              className="header h-5 w-full cursor-pointer flex items-center justify-between"
              onClick={() => handleToggle(core.id)}
            >
              <h1 className="text-xl font-semibold">{core.title}</h1>
              <LuArrowUpDown />
            </div>
            <div
              className="content transition-all duration-400 ease-in-out p-1 overflow-hidden"
              style={{
                height: openId === core.id ? "auto" : "0px",
              }}
            >
              <p>{core.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cores;
