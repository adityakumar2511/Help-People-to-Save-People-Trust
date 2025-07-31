import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo.png";
import "./Header.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Donate from "./Donate";
import Sangam from "./Sangam-Health-Care";
import Dhuliya from "./Dhuliya-Consultancy-Service";
import Internship from "./Internship";
import Home from "./Home";

const Header = () => {
  const logoRef = useRef(null);
  const headingRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
  gsap.fromTo(
    logoRef.current,
    { x: -500, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
  );

  gsap.fromTo(
    headingRef.current,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.5,
      delay: 0.5,
    }
  );
}, []);


  return (
    <>      {/* Header Section */}
     <header className="p-4 shadow-md font-body bg-white sticky top-0 z-50">
  <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4 sm:gap-8 md:gap-12">
    
    {/* Logo Section - Always Left */}
    <div ref={logoRef} className="flex items-center">
      <img
        src={logo}
        alt="Logo"
        className="h-14 w-14 sm:h-20 sm:w-20 object-cover rounded-full"
      />
    </div>

    {/* Text Section - Responsive */}
    <div className="text-right flex flex-col space-y-0.5 pr-2">
      <h1
        ref={(el) => (headingRef.current[0] = el)}
        className="text-base sm:text-[8px] md:text-xl lg:text-2xl font-bold web-name leading-snug"
      >
        Help People to Save People Trust
      </h1>
      <p
        ref={(el) => (headingRef.current[1] = el)}
        className="text-xs sm:text-sm md:text-base font-heading font-semibold web-name2"
      >
        Non Government Organization
      </p>
      <p
        ref={(el) => (headingRef.current[2] = el)}
        className="text-[10px] sm:text-xs md:text-sm font-heading font-medium"
      >
        Reg. No.: 493/17
      </p>
    </div>

  </div>
</header>





      {/* Navbar Component */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/sangam-health-care" element={<Sangam />} />
        <Route path="/dhuliya-consultancy-service" element={<Dhuliya />} />
        <Route path="/internship" element={<Internship />} />
      </Routes>
      </>
    
  );
};

export default Header;
