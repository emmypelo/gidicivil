import Mission from "../public/img/mission.png";
import Vision from "../public/img/vision.png";
import Image from "next/image";

const MissionVision = () => {
  return (
    <div className="mission-vision grid grid-cols-1 md:grid-cols-2 mt-1 gap-2 h-auto">
      {/* vision */}
      <div className="border-slate-400 border-2 rounded-xl flex flex-col">
        <h2 className="text-gidiYellow text-2xl font-semibold underline mb-2 text-center">
          Our Vision
        </h2>
        <div className="vision w-full p-2 flex gap-2 items-center ">
          <div className="image w-1/4">
            <Image
              className=""
              src={Vision}
              width={100}
              height={40}
              alt="Vision"
            />
          </div>
          <div className="text-contents w-3/4 flex flex-col p-1">
            <p className="font-[400] p-2">
              To become a foremost construction company in Africa by maintaining
              a high level of professionalism and trust.
            </p>
          </div>
        </div>
      </div>

      {/* mission */}

      <div className="border-slate-400 border-2 rounded-xl flex flex-col">
        <h2 className="text-gidiYellow text-2xl font-semibold underline mb-2 text-center">
          Our Mission
        </h2>
        <div className="vision w-full p-2 flex gap-2 items-center ">
          <div className="image w-1/4">
            <Image
              className=""
              src={Vision}
              width={100}
              height={40}
              alt="Vision"
            />
          </div>
          <div className="text-contents w-3/4 flex flex-col p-1">
            <p className="font-[400] p-2">
              Dedication to providing quality construction, to improve the built
              environment and implement a long term relationship with our
              clients, based on quality, timely delivery, and safety.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default MissionVision;
