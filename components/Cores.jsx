const Core = ({ id, title, description }) => (
  <div
    key={id}
    className="bg-black flex justify-between items-center w-full h-[240px] relative group"
  >
    <div className="text-white p-2 hover:py-6 text-center flex flex-col justify-around h-full">
      <p className="text-white group-hover:hidden text-left underline underline-offset-4">{`0${id}`}</p>
      <h3 className="text-white text-left text-lg font-bold h-16 group-hover:mb-4">
        {title}
      </h3>
      <p className="text-white h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:h-[100%] text-[13px] text-left">
        {description}
      </p>
    </div>
  </div>
);

const Cores = () => {
  const cores = [
    {
      id: 1,
      title: "Customer Focus & Long-Term View",
      description:
        "We ensure we add value and inspire our customers because we recognized that they come to us by choice. We dare to lead with a focus beyond tomorrow and take opportunities to learn and grow.",
    },
    {
      id: 2,
      title: "Quality & Innovation",
      description:
        "We do not compromise on quality. We relentlessly drive for better, fit-for-purpose solutions and breakthrough innovations.",
    },
    {
      id: 3,
      title: "Passion for Excellence",
      description: "To be the best, give the best, all the time.",
    },
    {
      id: 4,
      title: "Customer Focused",
      description: "We ensure every customer is satisfied.",
    },
    {
      id: 5,
      title: "Teamwork",
      description: "We promote an environment of collaboration and respect.",
    },
    {
      id: 6,
      title: "Integrity",
      description: "We are professional, ethical, honest and accountable.",
    },
  ];

  return (
    <div className="w-full h-auto">
      <h1 className="section-title">
        Our Core Values
      </h1>
      <div className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px]">
          {cores.map((core) => (
            <Core key={core.id} {...core} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cores;
