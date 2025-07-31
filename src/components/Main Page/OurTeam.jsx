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
    <section className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-gray-100 text-center">
  {/* Section Title */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0070C0] mb-8">
    Our Team
  </h2>

  {/* Scroll Container */}
  <div
    className="relative"
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
  >
    {/* Left Scroll Button - hidden on small screens */}
    <button
      onClick={() => scroll("left")}
      className="hidden sm:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 text-[#0070C0] bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition"
    >
      <MdChevronLeft size={36} />
    </button>

    {/* Right Scroll Button - hidden on small screens */}
    <button
      onClick={() => scroll("right")}
      className="hidden sm:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 text-[#0070C0] bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition"
    >
      <MdChevronRight size={36} />
    </button>

    {/* Team Cards Container */}
    <div
      ref={scrollRef}
      className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-2 sm:px-12 py-2 sm:py-4 scrollbar-hide"
    >
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="group min-w-[250px] max-w-xs sm:min-w-[280px] sm:max-w-sm bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 hover:bg-orange-50 mx-auto"
        >
          <FaUserTie
            size={56}
            className="mb-3 text-[#ec7e35] transition duration-300 group-hover:text-black"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-[#0070C0] transition">
            {member.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-700">{member.role}</p>
          <p className="text-xs sm:text-sm text-gray-500">{member.department}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default OurTeam;
