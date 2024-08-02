import Image from "next/image";

const Projects = ({ image, name }) => {
  return (
    <div className="card h-[400px] flex flex-col justify-around">
      <div className=" h-[300px]  relative">
        <Image
          className="w-[100%] object-contain h-full"
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h2 className="1/4">{name}</h2>
    </div>
  );
};

export default Projects;
