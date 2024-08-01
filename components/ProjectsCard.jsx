"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Projects from "./Projects";
import { productData, responsive } from "./data.js";

const ProjectsCard = () => {
  const project = productData.map((item) => (
    <Projects
      name={item.name}
      url={item.imageurl}
      description={item.description}
      key={item.id}
    />
  ));

  return (
    <div className="">
      <h1 className="text-xl text-center text-gidiYellow font-bold">Our Previous Projects</h1>
      <Carousel showDots={true} responsive={responsive}>
        {project}
      </Carousel>
    </div>
  );
};

export default ProjectsCard;
