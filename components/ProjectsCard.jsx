"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Projects from "./Projects";
import { projectData, responsive } from "./data.js";

const ProjectsCard = () => {
  const project = projectData.map((project) => (
    <Projects name={project.name} image={project.image} key={project.id} />
  ));

  return (
    <div className="">
      <h1 className="text-xl text-center text-gidiYellow font-bold">
        Our Previous Projects
      </h1>
      <Carousel showDots={true} responsive={responsive}>
        {project}
      </Carousel>
    </div>
  );
};

export default ProjectsCard;
