import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faUsers,
  faUserShield,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

const stats = [
  { icon: faCodeBranch, value: 2, suffix: "+", label: "Branches" },
  { icon: faUsers, value: 10000, suffix: "+", label: "Members" },
  { icon: faUserShield, value: 4, suffix: "+", label: "Committees" },
  { icon: faCheckCircle, value: 500, suffix: "+", label: "Solved Cases" },
];

const CounterSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // Stop observing after trigger
        }
      },
      {
        threshold: 0.3, // Trigger when 30% is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
  ref={sectionRef}
  className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-tr from-[#1e293b] to-[#0f172a] text-white"
>
  <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-10">
    {/* Heading */}
    <div className="text-center mb-10 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0070C0] mb-3 sm:mb-4">
        Our Impact
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-200">
        Empowering lives with compassion, justice, and action.
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
      {stats.map((item, index) => (
        <div
          key={index}
          className="group bg-white/10 hover:bg-white/20 p-5 sm:p-6 rounded-xl text-center shadow-xl transform hover:scale-105 transition duration-300"
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-3xl sm:text-4xl mb-2 sm:mb-3 text-[#ec7e35] transition group-hover:text-white"
          />
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {startCount ? (
              <CountUp end={item.value} duration={5} suffix={item.suffix} />
            ) : (
              "0"
            )}
          </h3>
          <p className="mt-1 text-sm sm:text-base font-bold text-[#ec7e35]">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default CounterSection;
