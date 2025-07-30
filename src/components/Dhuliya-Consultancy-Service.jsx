import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import DCS from "../assets/DCS.jpeg"; // optional image

const DhuliyaConsultancy = () => {
  // const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   });
  
  //   const handleChange = (e) => {
  //     setFormData((prev) => ({
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     }));
  //   };
  
  //   const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   const formDataToSend = new FormData();
  //   formDataToSend.append("name", formData.name);
  //   formDataToSend.append("email", formData.email);
  //   formDataToSend.append("phone", formData.phone);
  //   formDataToSend.append("message", formData.message);
  
  //   try {
  //     const response = await fetch("https://formspree.io/f/your_form_id", {
  //       method: "POST",
  //       body: formDataToSend,
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     });
  
  //     if (response.ok) {
  //       alert("Form submitted successfully!");
  //       setFormData({ name: "", email: "", phone: "", message: "" });
  //     } else {
  //       alert("There was a problem submitting the form.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("Something went wrong. Please try again.");
  //   }
  // };
  return (
    <div className="relative bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">

      {/* Top Banner */}
      <div className="w-full h-64 bg-gradient-to-r from-[#ec7e35] to-[#0070C0] flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
          Dhuliya Consultancy Services (DCS)
        </h1>
      </div>

      {/* Image Banner Section (optional) */}
      {/* <div className="flex justify-center py-10 px-4">
        <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-lg border-4 border-transparent hover:border-[#ec7e35] transition-all duration-700 hover:scale-105">
          <img
            src={DCS}
            alt="Dhuliya Consultancy Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Section 1 */}
        <div className="bg-white dark:bg-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-6 shadow-md transition-all duration-700 hover:scale-105">
          <h2 className="text-2xl font-semibold text-[#0070C0] mb-2">
            Legal Drafting
          </h2>
          <p className="text-base leading-relaxed text-justify">
            Expert preparation of legal documents including <strong>Bail Applications, Writs, PILs, Legal Notices, and Agreements</strong> under the leadership of <strong>Adv. Shashank Dhuliya</strong>.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-6 shadow-md transition-all duration-700 hover:scale-105">
          <h2 className="text-2xl font-semibold text-[#0070C0] mb-2">
            NGO Registration
          </h2>
          <p className="text-base leading-relaxed text-justify">
            End-to-end registration and compliance services for <strong>Trusts, Societies, Section 8 companies, and certifications like 12A, 80G, and CSR</strong>.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-6 shadow-md transition-all duration-700 hover:scale-105">
          <h2 className="text-2xl font-semibold text-[#0070C0] mb-2">
            Government Services
          </h2>
          <p className="text-base leading-relaxed text-justify">
            Assistance with <strong>RTI Filing, Tenders, and Court Procedures</strong>, ensuring accuracy, transparency, and timely execution.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-6 shadow-md transition-all duration-700 hover:scale-105">
          <h2 className="text-2xl font-semibold text-[#0070C0] mb-2">
            Digital Support
          </h2>
          <p className="text-base leading-relaxed text-justify">
            Professional support for <strong>Resume Writing, Legal Content Creation, and PowerPoint Presentations</strong> tailored for legal and NGO sectors.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white dark:bg-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-6 shadow-md transition-all duration-700 hover:scale-105">
          <h2 className="text-xl font-medium text-[#0070C0] mb-2">Contact Us</h2>
          <p className="text-base leading-relaxed text-justify">
            📧 Email: <strong>dhuliyaconsultancy@gmail.com</strong><br />
            📞 Phone: <strong>+91-8808649962</strong>
          </p>
        </div>
      </div>
      {/* <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md mb-10">
        <h2 className="text-3xl font-semibold text-center text-[#0070C0] mb-8">
          Contact with Dhuliya Consultancy Services
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ec7e35]"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ec7e35]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ec7e35]"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ec7e35]"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#ec7e35] text-white px-6 py-2 rounded-md hover:bg-[#d76b1d] transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div> */}
      <a
        href="tel:+917052097771"
        className="fixed bottom-6 right-6 z-50 bg-[#069206] text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300"
      >
      <FontAwesomeIcon icon={faPhone} className="text-lg" />
        Call Now
      </a>
    </div>
    
  );
};

export default DhuliyaConsultancy;
