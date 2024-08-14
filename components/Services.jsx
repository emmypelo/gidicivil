import Image from "next/image";
import Link from "next/link";
import Sketch from "../public/img/sketch2.jpg";

const Services = () => {
  const services = [
    {
      title: "Project Conceptual Design, Planning, and Management",
      description:
        "We transform your vision into a detailed blueprint, providing comprehensive design, planning, and management services to ensure every aspect of your project is meticulously crafted and efficiently executed. From initial concepts to final plans, we oversee every phase to deliver your project on time and within budget.",
      id: 1,
    },
    {
      title: "General construction",
      description:
        "Our skilled team delivers high-quality construction services for a variety of projects, including residential, commercial, and industrial buildings. We ensure each project is completed with precision, adhering to the highest standards of craftsmanship and safety.",
      id: 2,
    },
    {
      title: "Repairs and Maintenance",
      description:
        "Keep your property in prime condition with our expert repair and maintenance services. From routine upkeep to urgent repairs, our team is equipped to handle all your maintenance needs, ensuring the longevity and safety of your buildings.",
      id: 3,
    },
    {
      title: "Demolition and Remodelling",
      description:
        "Whether you need to clear a site for new construction or transform an existing space, our demolition and remodelling services are designed to meet your needs. We handle projects of all sizes with efficiency and care, ensuring minimal disruption and maximum satisfaction.",
      id: 4,
    },
    {
      title:
        "Business Case Generation and Feasibility Studies",
      description:
        "Our business case generation services provide you with detailed analyses and strategic plans to support your construction projects. We help you evaluate the feasibility, benefits, and risks, ensuring informed decision-making and successful outcomes for your investments. Additionally, we conduct thorough site evaluations and feasibility studies to assess potential challenges and opportunities, providing insights into site conditions and project viability.",
      id: 5,
    },
    {
      title: "Interior Design and Finishing",
      description:
        "Our interior design and finishing services bring your spaces to life with creative and functional designs. From selecting materials and finishes to coordinating colors and layouts, we ensure your interiors reflect your style and meet your needs.",
      id: 6,
    },
  ];

  return (
    <div className="w-[100vw] p-2  mx-auto">
      <p className="section-title capitalize"> What we offer</p>
      <p className="text-center">Glance through some of our services</p>
      <div className="rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full bg-white border border-gray-200 rounded-lg shadow  "
          >
            {/* <Image
              className="rounded-t-lg"
              src={Sketch}
              alt="Gidi services"
              width={"auto"}
              height={"auto"}
            /> */}

            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {service.title}
              </h5>

              <p className="font-normal text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
