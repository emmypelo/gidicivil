// import Image from "next/image";
// import Hero from "../public/img/rebar-site.jpg";
// import Eng from "../public/img/engs.png";
// import Link from "next/link";

const Landing = () => {
  return (
    <section
      className="bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('../img/rebar.jpg')",
        backgroundColor: "#374151",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Your Professional Construction Solution
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Here at <span className="font-bold"> GIDI CIVIL CONSTRUCTION, </span>
          achieving your aspirations is within reach when you work with us.
          Maintaining the utmost level of professionalism, honesty, and fairness
          in our interactions with clients, employees, and professional
          associates allows us to consistently meet our clients needs through
          the provision of high-quality construction services. We strive to
          create value for our clients through innovation, foresight, and
          integrity.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gidiYellow hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 "
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
