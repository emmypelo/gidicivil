import Image from "next/image";
import inspection from "../public/img/site_crane.jpg";

import AboutParagraph from "./AboutParagraph";
import MissionVision from "./MissionVision";
import Cores from "./Cores";

const AboutOverview = () => {
  return (
    <div className="flex flex-col bg-[#020213] w-[100vw] mx-auto justify-between p-3">
      <div className="top flex flex-col md:flex-row w-full bg-black justify-between gap-2 h-3/4 p-3">
        <div className="text-content text-black flex flex-col w-full gap-2 justify-center md:w-1/2">
          <h1 className="text-gidiYellow text-2xl text-center font-bold">
            About us
          </h1>
          <h1 className=" text-xl font-extrabold">
            We help individuals and organisations build their dreams
          </h1>

          <AboutParagraph />
        </div>
        <div className="img-content md:flex flex-col w-full md:w-1/2 justify-center hidden">
          <Image
            src={inspection}
            className="w-full  width={'auto'}
          height={'auto'}"
            alt="gidi civil construction page"
          ></Image>
        </div>
      </div>

      {/* mission and vision */}
      <MissionVision />
      {/* Core values */}
      <Cores />
    </div>
  );
};

export default AboutOverview;
