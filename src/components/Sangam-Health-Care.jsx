import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import SHC from "../assets/SHC.jpeg"; // Assuming you have an image for Sangam Healthcare
import { useState } from "react";
const SangamHealthcare = () => {

//   const [formData, setFormData] = useState({
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
      Sangam Healthcare Support
    </h1>
  </div>

  {/* Image Banner Section */}
  {/* <div className="flex justify-center py-10 px-4">
    <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-lg border-4 border-transparent hover:border-[#ec7e35] transition-all duration-700 hover:scale-105">
      <img
        src={SHC}
        alt="Sangam Healthcare Banner"
        className="w-full h-full object-cover"
      />
    </div>
  </div> */}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Section 1 */}
        <div className="bg-white dark:bg-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-6 shadow-md transition-all duration-700 hover:scale-105">
          <h2 className="text-2xl font-semibold text-[#0070C0] mb-2">
            Patient Care Services
          </h2>
          <p className="text-base leading-relaxed text-justify">
            We provide professional home care through <strong>Sangam Health Home Care</strong> under the supervision of <strong>Manager Deepa Nishad</strong>. For inquiries, call <strong>+91-7052097771</strong>.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-6 shadow-md transition-all duration-700 hover:scale-105">
          <h2 className="text-2xl font-semibold text-[#0070C0] mb-2">
            Free Health Camps
          </h2>
          <p className="text-base leading-relaxed text-justify">
            Regular free health camps and medical aid initiatives are conducted for underprivileged communities, focusing on preventive care and treatment outreach.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-6 shadow-md transition-all duration-700 hover:scale-105">
          <h2 className="text-2xl font-semibold text-[#0070C0] mb-2">
            Upcoming HPSPT Cancer Hospital
          </h2>
          <p className="text-base leading-relaxed text-justify">
            HPSPT is working on establishing a cancer hospital to offer affordable and accessible cancer treatment to patients in need. This initiative aims to provide high-quality oncology care at minimal cost.
          </p>
        </div>
      </div>
      {/* Patient Registration Form */}
      <div className="w-full flex justify-center mt-16 px-4 mb-10">
        <div className="w-[70%]">
          <h2 className="text-3xl font-semibold text-center text-[#0070C0] mb-6">
            📝 Sangam Health Home Care – Patient Registration Form
          </h2>
          <iframe
            title="Patient Registration Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSd7W0KcS4VopOMruskKwLuQ1b50jvB6kiWYtnYd8Zi6g9U8ZQ/viewform?embedded=true"
            width="100%"
            height="400"
            frameBorder="0"
            className="rounded-xl border border-[#ec7e35]"
            style={{ overflow: "hidden" }}
          >
            Loading…
          </iframe>
        </div>
      </div>


      {/* <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-center text-[#0070C0] mb-8">
          Contact with Sangam Health Care
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

      {/* Sticky Call Button with Font Awesome */}
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

export default SangamHealthcare;
