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
      <header className="p-4 shadow-md font-body bg-white dark:bg-black sticky top-0 z-50">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo Section */}
          <div ref={logoRef} className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-20 object-cover rounded-full"
            />
          </div>

          {/* Text Section */}
          <div className="text-center sm:text-right">
            <h1
              ref={(el) => (headingRef.current[0] = el)}
              className="text-xl sm:text-3xl font-heading font-bold web-name"
            >
              Help People to Save People Trust
            </h1>
            <p
              ref={(el) => (headingRef.current[1] = el)}
              className="text-base sm:text-lg font-heading web-name2 font-bold"
            >
              Non Government Organization
            </p>
            <p
              ref={(el) => (headingRef.current[2] = el)}
              className="text-sm sm:text-base font-heading font-bold"
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
