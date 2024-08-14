import Image from "next/image";

const Projects = ({ image, name, location }) => {
  return (
    <div className="card h-[400px] flex flex-col justify-around">
      <div className=" h-[300px]  relative">
        <Image
          className="w-[100%] h-full contain-layout object-cover  "
          src={image}
          alt={name}
          width={"auto"}
          height={"auto"}
        />
      </div>
      <div className="text-left">
        <h2 className="font-bold">{name}</h2>
        <p className="text-[13px]"> {location} </p>
      </div>

      
    </div>
  );
};

export default Projects;
