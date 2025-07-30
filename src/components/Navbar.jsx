import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);
  const mobileRef = useRef(null);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    {
      name: "Services",
      dropdown: true,
      items: [
        { name: "Sangam Health Care", to: "/sangam-health-care" },
        { name: "Dhuliya Consultancy Service", to: "/dhuliya-consultancy-service" },
      ],
    },
    { name: "Internship", to: "/internship" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  const isServiceActive = navLinks[2].items.some(item => item.to === location.pathname);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current.children,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <nav className="bg-black text-white shadow-md font-body top-0 z-[9999] relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold font-heading">HPSPT</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 items-center" ref={navRef}>
          {navLinks.map((link, i) => (
            <li key={i} className="relative group">
              {!link.dropdown ? (
                <Link
                  to={link.to}
                  className={`transition ${
                    location.pathname === link.to
                      ? "text-[#ec7e35] underline decoration-[#ec7e35] decoration-[4px] underline-offset-[10px]"
                      : "hover:text-[#ec7e35] hover:underline decoration-[#ec7e35] decoration-[3px] underline-offset-8"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <div
                  className="cursor-pointer flex items-center space-x-1 relative"
                  onMouseEnter={() => {
                    if (hoverTimeout) clearTimeout(hoverTimeout);
                    setServiceOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setServiceOpen(false), 300); // 1 sec delay
                    setHoverTimeout(timeout);
                  }}
                >
                  <span
                    className={`transition ${
                      isServiceActive
                        ? "text-[#ec7e35] underline decoration-[#ec7e35] decoration-[4px] underline-offset-[10px]"
                        : "hover:text-[#ec7e35] hover:underline decoration-[#ec7e35] decoration-[3px] underline-offset-8"
                    }`}
                  >
                    {link.name}
                  </span>
                  <ChevronDown size={16} />

                  {serviceOpen && (
                    <ul className="absolute top-full left-0 mt-2.5 bg-gray-800 rounded shadow-md w-64 py-2 z-[9999]">
                      {link.items.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={item.to}
                            className="block px-4 py-2 hover:bg-gray-700"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/donate"
              className="bg-[#ec7e35] text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              Donate
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul ref={mobileRef} className="md:hidden px-4 pb-4 space-y-2 bg-black text-sm z-[9999] relative">
          {navLinks.map((link, i) => (
            <li key={i}>
              {!link.dropdown ? (
                <Link
                  to={link.to}
                  className={`block py-2 transition ${
                    location.pathname === link.to
                      ? "text-[#ec7e35] underline decoration-[#ec7e35] decoration-[4px] underline-offset-[10px]"
                      : "hover:text-[#ec7e35] hover:underline decoration-[#ec7e35] decoration-[3px] underline-offset-8"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <>
                  <div
                    className="flex justify-between items-center py-2"
                    onClick={() => setServiceOpen(!serviceOpen)}
                  >
                    <span
                      className={`transition ${
                        isServiceActive
                          ? "text-[#ec7e35] underline decoration-[#ec7e35] decoration-[4px] underline-offset-[10px]"
                          : "hover:text-[#ec7e35] hover:underline decoration-[#ec7e35] decoration-[3px] underline-offset-8"
                      }`}
                    >
                      {link.name}
                    </span>
                    <ChevronDown size={16} />
                  </div>
                  {serviceOpen && (
                    <ul className="ml-4">
                      {link.items.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to={item.to}
                            className="block py-1 hover:text-[#ec7e35]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/donate"
              className="inline-block mt-2 bg-[#ec7e35] px-4 py-2 rounded hover:bg-orange-600"
            >
              Donate
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
