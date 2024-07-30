import Image from "next/image";
import Link from "next/link";
import inspection from "../public/img/site_crane.jpg";
import Mission from "../public/img/mission.png";
import Vision from "../public/img/vision.png";
import Integrity from "../public/img/integrity.png";

const AboutOverview = () => {
  return (
    <div className="flex  flex-col bg-[#020213] w-[100vw] mx-auto justify-between p-3">
      <div className="top flex flex-col md:flex-row w-full bg-white justify-between gap-2 h-3/4 p-3">
        <div className="text-content  text-black flex flex-col w-full gap-2 justify-center md:w-1/2">
          <h1 className="text-[#ffad00] text-2xl font-bold"> About us</h1>
          <h1 className="text-black text-xl font-extrabold">
            We help individuals and organisations build their dreams
          </h1>
          <p className="text-black">
            {" "}
            Gidi Civil Construction Limited was incorporated as a limited
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
            exceptional performance by every member of the construction team.
          </p>
          <Link
            href={"#"}
            className="text-[#ffac00] underline text-xl text-center font-bold"
          >
            Read more
          </Link>
        </div>
        <div className="img-content text-black flex flex-col w-full md:w-1/2  justify-center ">
          <Image src={inspection} className="w-full"></Image>
        </div>
      </div>

      <div className="numbers  w-full bg-transparent h-[200px] max-h-[200px] border border-red-300  gap-1 justify-evenly my-2 p-2 relative">
        <div className="containerA grid grid-cols-2 md:grid-cols-4 gap-2 p-2 h-full ">
          <div className="numbers-card">
            <h2 className="text-2xl font-extrabold">10+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="numbers-card">
            <h2 className="text-xl font-bold">15</h2>
            <p>Projects Completed </p>
          </div>
          <div className="numbers-card">
            <h2 className="text-2xl font-extrabold">8</h2>
            <p>Awards received</p>
          </div>
          <div className="numbers-card">
            <h2 className="text-xl font-bold">25+</h2>
            <p>Workforce </p>
          </div>
        </div>
      </div>

      {/* mission and vision */}

      <div className="mission-vision grid grid-cols-1 md:grid-cols-2 gap-1 ">
        {/* vision */}
        <div className="vision w-full min-h-[200px]  max-h-[250px] p-2 bg-white flex gap-2 items-center">
          <div className="image w-1/4">
            <Image className="" src={Vision} width={100} height={40} />
          </div>
          <div className="text-contents w-3/4 flex flex-col  border-2 rounded-xl border-slate-400 p-2">
            <h2 className="text-[#ffad00] text-2xl font-semibold underline mb-4">
              Our Vision
            </h2>
            <p className="text-black font-[400]">
              To become a foremost construction company in africa by maintaining
              high level of professionalism and trust.
            </p>
          </div>
        </div>

        {/* mission */}

        <div className="mission w-full min-h-[200px]  max-h-[250px] p-2 bg-white flex gap-2 items-center">
          <div className="image w-1/4">
            <Image className="" src={Mission} width={100} height={40} />
          </div>
          <div className="text-contents w-3/4 flex flex-col  border-2 rounded-xl border-slate-400 p-2">
            <h2 className="text-[#ffad00] text-2xl font-semibold underline mb-4">
              Our Mission
            </h2>
            <p className="text-black font-[400]">
              Dedication to providing quality construction, to improve the built
              environment and implement a long term relationship with our
              clients, based on quality, timely delivery, safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOverview;

//  <div className="bottom flex gap-1 mx-0 w-full justify-evenly bg-[#081229] text-[#ffac00] h-[150px] border-sky-200 border-2">
//    <svg xmlns="http://www.w3.org/2000/svg">
//      <path
//        d="M 180 60  C 120 110,  80 70, 65 65 S 80 80"
//        stroke="orange"
//        fill="none"
//        stroke-width="2"
//        stroke-dasharray="5"
//        className="w-full"
//      />
//    </svg>

//    <svg xmlns="http://www.w3.org/2000/svg">
//      <path
//        d="M 180 60  C 100 10,  80 70, 65 65 S 80 80"
//        stroke="orange"
//        fill="none"
//        stroke-width="2"
//        stroke-dasharray="5"
//        className="w-full"
//      />
//    </svg>
//    <div className="details border-sky-200 border-2">Workforce</div>
//    <div className="details border-sky-200 border-2">Equipments</div>
//  </div>;
