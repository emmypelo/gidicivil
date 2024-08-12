import Image from "next/image";
import Construction from "../public/img/under_construction.jpg";

const UnderConstruction = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-800 flex">
      <Image src={Construction} className="m-auto " />
    </div>
  );
};

export default UnderConstruction;
