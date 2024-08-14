"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Projects from "./Projects";
import { projectData, responsive } from "./data.js";

const ProjectsCard = () => {
  const project = projectData.map((project) => (
    <Projects
      name={project.name}
      image={project.image}
      key={project.id}
      location={project.location}
    />
  ));

  return (
    <div
      className="text-center w-full relative z-10 h-[500px]"
      style={{
        backgroundImage: "url('../images/projects.png')",
        backgroundColor: "#fab00710",
        // backgroundColor: "#74a2ed",
        backgroundBlendMode: "multiply",
        backgroundSize: "100% 100%",
      }}
    >
      <h1 className="section-title ">
        Our  Projects
      </h1>
      <Carousel showDots={true} responsive={responsive}>
        {project}
      </Carousel>
      <button className="bodyButton w-56">See More Projects</button>
    </div>
  );
};

export default ProjectsCard;
