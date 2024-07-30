import Image from "next/image";
import Hero from "../public/img/rebar-site.jpg";
import Eng from "../public/img/engs.png";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="mt-12 bg-[#020213]  w-full h-[400px] md:h-[450px] lg:h-[700px] relative overflow-hidden px-3 mx-auto">
      <Image
        src={Hero}
        alt="Dojo Helpdesk logo"
        placeholder="blur"
        quality={100}
        className="object-cover  blur-[2px]  w-[1800px] h-[100%]"
      />
      <div className="overlay absolute top-0 left-0 flex flex-col md:flex-row justify-between gap-2  w-full h-[400px] md:h-[450px] lg:h-[700px] px-6 bg-[rgba(0,0,0,0.5)]">
        {/*  */}
        <div className="text-content h-full  flex flex-col gap-2 justify-center p-2 w-full md:w-[50%] z-[10]">
          <h1 className="capitalize text-xl font-bold">
            your professional construction solution
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            natus veniam rem nam consequuntur voluptates corporis rerum nihil id
            eligendi?
          </p>
          <div className="cta flex w-full p-2 gap-3 mt-2">
            <Link href={"#"}>
              {" "}
              <button className="cta-button">About Us</button>
            </Link>

            <Link href={"#"}>
              {" "}
              <button className="cta-button">Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="img-content flex h-[100%] items-end w-full md:w-[50%] -mt-32 ml-10 md:mt-0 z-[9] relative">
          <Image
            src={Eng}
            alt="Dojo Helpdesk logo"
            placeholder="blur"
            quality={100}
            className="object-contain w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
