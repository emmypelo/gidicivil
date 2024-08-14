const Landing = () => {
  return (
    <section
      className="bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('../images/landing.jpg')",
        // backgroundColor: "#374151",
        backgroundColor: "#74a2ed",
        backgroundBlendMode: "multiply",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Trust built through every experience
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Offering exceptional custom-built homes designed to suit your
          individual lifestyle.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="bodyButton border-transparent  "
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
