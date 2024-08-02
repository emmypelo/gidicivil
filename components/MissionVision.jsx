import Mission from "../public/img/mission.png";
import Vision from "../public/img/vision.png";
import Image from "next/image";

const ContentBlock = ({
  title,
  imgSrc,
  altText,
  description,
  containerClass,
}) => (
  <div
    className={`border-slate-400 border-2 rounded-xl flex flex-col ${containerClass} h-full`}
  >
    <h2 className="text-gidiYellow text-2xl font-semibold underline mb-2 text-center">
      {title}
    </h2>
    <div className="w-full p-2 flex gap-2 items-center flex-grow">
      <div className="w-1/4">
        <Image
          className="object-cover w-full h-full"
          src={imgSrc}
          alt={altText}
        />
      </div>
      <div className="w-3/4 flex flex-col p-1">
        <p className="font-[400] p-2">{description}</p>
      </div>
    </div>
  </div>
);

const MissionVision = () => {
  return (
    <div className="mission-vision grid grid-cols-1 md:grid-cols-2 mt-1 gap-2 h-auto">
      <ContentBlock
        title="Our Vision"
        imgSrc={Vision}
        altText="Vision"
        description="To become a foremost construction company in Africa by maintaining a high level of professionalism and trust."
        containerClass="h-full"
      />
      <ContentBlock
        title="Our Mission"
        imgSrc={Mission}
        altText="Mission"
        description="Dedication to providing quality construction, to improve the built environment and implement a long term relationship with our clients, based on quality, timely delivery, and safety."
        containerClass="h-full"
      />
    </div>
  );
};

export default MissionVision;
