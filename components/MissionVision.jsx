import Mission from "../public/img/mission.png";
import Vision from "../public/img/vision.png";
import Image from "next/image";

const MissionVision = () => {
  return (
    <div className="mission-vision grid grid-cols-1 md:grid-cols-2 mt-1 gap-2">
      {/* vision */}
      <div className="vision w-full min-h-[200px] max-h-[250px] p-2 flex gap-2 items-center border-slate-400 border-2 rounded-xl">
        <div className="image w-1/4">
          <Image
            className=""
            src={Vision}
            width={100}
            height={40}
            alt="Vision"
          />
        </div>
        <div className="text-contents w-3/4 flex flex-col p-2">
          <h2 className="text-gidiYellow text-2xl font-semibold underline mb-4">
            Our Vision
          </h2>
          <p className="font-[400]">
            To become a foremost construction company in Africa by maintaining a
            high level of professionalism and trust.
          </p>
        </div>
      </div>

      {/* mission */}
      <div className="mission w-full min-h-[200px] max-h-[250px] p-2 flex gap-2 items-center border-slate-400 border-2 rounded-xl">
        <div className="image w-1/4">
          <Image
            className=""
            src={Mission}
            width={100}
            height={40}
            alt="Mission"
          />
        </div>
        <div className="text-contents w-3/4 flex flex-col p-2">
          <h2 className="text-gidiYellow text-2xl font-semibold underline mb-4">
            Our Mission
          </h2>
          <p className="font-[400]">
            Dedication to providing quality construction, to improve the built
            environment and implement a long term relationship with our clients,
            based on quality, timely delivery, and safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
