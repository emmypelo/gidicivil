import AboutOverview from "@/components/AboutOverview";
import Landing from "@/components/Landing";
import ProjectsCard from "@/components/ProjectsCard";
import Services from "@/components/Services";
import React from "react";

const Home = () => {
  return (
    <div>
      <Landing />
      <AboutOverview />
      <Services />
      <ProjectsCard />
    </div>
  );
};

export default Home;
