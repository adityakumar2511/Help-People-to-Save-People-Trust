import React from "react";
import { FaGavel, FaHandHoldingHeart, FaHospitalAlt } from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      Icon: FaGavel,
      title: "Legal Aid & Rights Protection",
      points: [
        "Free legal counseling and assistance",
        "Support in domestic violence, elderly abuse, and rights violations",
        "Public interest litigation (PIL) and legal awareness campaigns",
      ],
    },
    {
      Icon: FaHospitalAlt,
      title: "Healthcare Support",
      points: [
        "Home care via Sangam Health (Deepa Nishad - +91-7052097771)",
        "Free health camps and community medical aid",
        "Upcoming HPSPT Cancer Hospital for affordable treatment",
      ],
    },
    {
      Icon: FaHandHoldingHeart,
      title: "Social Welfare Initiatives",
      points: [
        "Distribution of food, clothing, and emergency aid",
        "Senior citizen help and women empowerment",
        "Disaster relief and victim support programs",
      ],
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-20 text-gray-800">
  {/* Heading Section */}
  <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0070C0] mb-4">
      Our Services
    </h2>
    <p className="text-base sm:text-lg text-[#747575] max-w-xl mx-auto">
      We are committed to social justice, healthcare, and welfare support.
    </p>
  </div>

  {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
    {services.map((service, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-md border border-transparent hover:border-[#ec7e35] transform hover:scale-[1.02] transition-all duration-500 p-6 group"
      >
        {/* Icon */}
        <service.Icon className="text-3xl sm:text-4xl text-[#ec7e35] mb-4 transition-colors duration-300 group-hover:text-black" />

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-[#ec7e35] transition-colors duration-300">
          {service.title}
        </h3>

        {/* Bullet Points */}
        <ul className="list-disc list-inside text-sm sm:text-base text-[#747575] space-y-2">
          {service.points.map((point, i) => (
            <li key={i} className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              {point}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

  );
};

export default OurServices;
