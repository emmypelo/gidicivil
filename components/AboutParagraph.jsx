"use client";
import { useState, useRef, useEffect } from "react";

const AboutParagraph = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isExpanded]);

  const text = `Gidi Civil Construction Limited was incorporated as a limited
  liability February 2021 offering various construction services from
  conception, planning, designing, constructions supervision,
  operation, renovation and maintenance of all forms of building and
  infrastructural projects and systems in the public and private
  sector including drainage systems and underground structures, land
  reclamations, soil testing, landscaping, external works, interior
  design and decoration. GCC is committed to providing value-added
  construction services to our clients by creating a successful
  partnership with them throughout the construction process. Our
  pledge is to establish lasting relationships with our clients by
  exceeding their expectations and gaining their trust through
  exceptional performance by every member of the construction team.`;

  const first20Words = text.split(" ").slice(0, 66).join(" ");
  const remainingWords = text.split(" ").slice(66).join(" ");

  return (
    <div className="text-center">
      {" "}
      <p className="text-left">
        {first20Words}
        <span
          ref={contentRef}
          style={{
            maxHeight: maxHeight,
            transition: "max-height 0.5s ease-in-out",
            overflow: "hidden",
            display: "inline-block",
          }}
          
        >
          {` ${remainingWords}`}
        </span>
      </p>
      <button
        onClick={toggleExpand}
        className="text-black  text-xl text-center font-bold mt-2 mx-auto w-[8rem]  border-2 border-white bg-gidiYellow p-1 hover:bg-white hover:border-gidiYellow hover:-translate-y-2 duration-500 ease-in-out"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default AboutParagraph;
