import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const columnsRef = useRef([]);

  // useEffect(() => {
  //   gsap.from(columnsRef.current, {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     ease: "power3.out",
  //     stagger: 0.3,
  //   });
  // }, []);

  return (
    <footer className="bg-black text-white pt-10 pb-6 px-4 font-body">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {/* About */}
    <div className="text-center sm:text-left">
      <h2 className="text-2xl font-heading font-semibold mb-3 text-[#0070C0]">About</h2>
      <div className="flex justify-center sm:justify-start mb-2">
        <img src={logo} alt="Logo" className="h-20 w-20 object-cover rounded-full" />
      </div>
      <p className="text-gray-300 text-justify">
        Help People to Save People Trust is a non-government organization
        dedicated to serving the community with healthcare, education, and awareness.
      </p>
    </div>

    {/* Quick Links */}
    <div className="text-center sm:text-left">
      <h2 className="text-2xl font-semibold mb-3 text-[#0070C0]">Quick Links</h2>
      <ul className="space-y-2 text-gray-300">
        <li><Link to="/" className="hover:text-[#ec7e35]">Home</Link></li>
        <li><Link to="/about" className="hover:text-[#ec7e35]">About</Link></li>
        <li><Link to="/gallery" className="hover:text-[#ec7e35]">Gallery</Link></li>
        <li><Link to="/contact" className="hover:text-[#ec7e35]">Contact</Link></li>
        <li><Link to="/donate" className="hover:text-[#ec7e35]">Donate</Link></li>
      </ul>
    </div>

    {/* Services */}
    <div className="text-center sm:text-left">
      <h2 className="text-2xl font-semibold mb-3 text-[#0070C0]">Services</h2>
      <ul className="space-y-2 text-gray-300">
        <li><Link to="/sangam-health-care" className="hover:text-[#ec7e35]">Sangam Health Care</Link></li>
        <li><Link to="/dhuliya-consultancy-service" className="hover:text-[#ec7e35]">Dhuliya Consultancy</Link></li>
        <li><Link to="/internship" className="hover:text-[#ec7e35]">Internship</Link></li>
      </ul>
    </div>

    {/* Contact */}
    <div className="text-center sm:text-left">
      <h2 className="text-2xl font-semibold mb-3 text-[#0070C0]">Contact</h2>
      <ul className="space-y-2 text-gray-300">
        <li>+91 8808649962</li>
        <li>pahpspt@gmail.com</li>
        <li>Civil Lines Prayagraj, UP, India</li>
      </ul>
      {/* Social Icons */}
      <div className="flex justify-center sm:justify-start space-x-4 mt-5 text-2xl">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#ec7e35] hover:scale-110 transition">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#ec7e35] hover:scale-110 transition">
          <FaInstagram />
        </a>
        <a href="https://x.com/helppeopleto?t=Z67qZH0kgqigs_wWYM610A&s=08" target="_blank" rel="noreferrer" className="hover:text-[#ec7e35] hover:scale-110 transition">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/help-people-to-save-people-trust-ngo-493a7a1bb/" target="_blank" rel="noreferrer" className="hover:text-[#ec7e35] hover:scale-110 transition">
          <FaLinkedinIn />
        </a>
        <a href="https://www.youtube.com/@helppeopletosavepeopletrust" target="_blank" rel="noreferrer" className="hover:text-[#ec7e35] hover:scale-110 transition">
          <FaYoutube />
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="border-t border-gray-700 mt-10 pt-5 text-xs text-gray-400">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-2 md:gap-0">
      <p className="text-[#ec7e35] font-medium text-md">
        Developed by{" "}
        <a
          href="https://adityakumar2511.github.io/My-Portfolio/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-500 transition"
        >
          Aditya Kumar
        </a>
      </p>
      <p className="text-md">&copy; {new Date().getFullYear()} Help People to Save People Trust. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
