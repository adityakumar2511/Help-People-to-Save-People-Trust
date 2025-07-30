import React, { useRef, useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const teamMembers = [
  { name: "Mr. Shashank Dhuliya", role: "CEO & National President", department: "Executive Leadership" },
  { name: "Mr. Kiran Kumar", role: "National Secretary", department: "Executive Leadership" },
  { name: "Mr. Shiva Kesarwani", role: "Treasurer", department: "Executive Leadership" },
  { name: "Mr. Shiv Prakash", role: "Manager", department: "Information & Communication" },
  { name: "Mr. Ankit Srivastav", role: "Manager", department: "MD CARD Committee" },
  { name: "Mr. Hitesh Chaurasiya", role: "Manager", department: "Membership Committee" },
  { name: "Ms. Deepa Nishad", role: "Manager", department: "Sangam Health Care" },
  { name: "Mr. Basu Kumar", role: "Manager", department: "DCS" },
  { name: "Mr. Vineet Kumar", role: "Manager", department: "Security Committee" },
  { name: "Mr. Anubhav Dubey", role: "Asst. Manager", department: "Security Committee" },
  { name: "Mr. Anshul Prasad", role: "Advisor", department: "Advisory & Technical" },
  { name: "Mr. Aditya Kumar", role: "Web Developer", department: "Website & Social Media" },
];

const OurTeam = () => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering && scrollRef.current) {
        const container = scrollRef.current;
        // If at end, go back to start
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      if (direction === "left") {
        if (container.scrollLeft === 0) {
          container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
        } else {
          container.scrollBy({ left: -300, behavior: "smooth" });
        }
      } else {
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <section className="w-full px-6 py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-[#0070C0] mb-8 ">Our Team</h2>
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-[#0070C0]"
        >
          <MdChevronLeft size={40} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-[#0070C0]"
        >
          <MdChevronRight size={40} />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden px-12 scroll-smooth"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group min-w-[250px] bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 hover:bg-orange-50"
            >
              <FaUserTie
                size={64}
                className="mb-4 text-[#ec7e35] transition duration-300 group-hover:text-black"
              />
              <h3 className="text-xl font-semibold text-gray-800 transition duration-300 group-hover:text-[#0070C0]">
                {member.name}
              </h3>
              <p className="text-md text-gray-700">{member.role}</p>
              <p className="text-sm text-gray-500">{member.department}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
