import AboutOverview from "@/components/AboutOverview";
import ContactForm from "@/components/ContactForm";
import Landing from "@/components/Landing";
import ProjectsCard from "@/components/ProjectsCard";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
// import UnderConstruction from "@/components/UnderConstruction";
import React from "react";

const Home = () => {
  return (
    <div>
      <Landing />
      <AboutOverview />
      <Services />
      <ProjectsCard />
      <Teams/>
      <ContactForm />

      {/* <UnderConstruction /> */}
    </div>
  );
};

export default Home;
