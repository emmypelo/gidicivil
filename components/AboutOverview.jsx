import Image from "next/image";
import inspection from "../public/img/site_crane.jpg";
import About from "../public/images/about.png";

import AboutParagraph from "./AboutParagraph";
import MissionVision from "./MissionVision";
import Cores from "./Cores";

const AboutOverview = () => {
  return (
    <div className="about bg-white min-h-[400px] w-full p-2">
      <p className="section-title">About Us</p>
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto">
        <div className="text flex flex-col justify-around py-2">
          <h1 className="text-black text-2xl mb-2 font-bold">
            Welcome To Gidi Civil Construction
          </h1>
          <AboutParagraph />
          <button className="bodyButton ">
            Read More
          </button>
        </div>
        <div className="image text-black h-full w-full relative max-h-[600px]">
          <Image
            src={About}
            layout="responsive"
            width={700}
            height={575}
            className="object-contain md:max-h-[400px] max-h-[450px] scale-y-[0.85] md:scale-y-[1.15] lg:scale-x-[1.90]"
            alt="About Us"
          />
        </div>
      </div>
      <Cores />
    </div>
  );
};

export default AboutOverview;
