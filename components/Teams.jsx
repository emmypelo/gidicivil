const Teams = () => {
  return (
    <section
      className="bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('../images/teambg.png')",
        // backgroundColor: "#374151",
        backgroundColor: "#8a7132",
        backgroundBlendMode: "multiply",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Meet our professional team
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          {`We boast of highly skilled and accomplished team of individual, leading Africa's real estate with demostrated expertise and experience`}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href="#" className="bodyButton border-transparent w-48 ">
            Meet the Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Teams;
