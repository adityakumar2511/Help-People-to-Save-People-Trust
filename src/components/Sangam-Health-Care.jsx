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
    <div className="relative bg-gray-100 text-gray-800 dark:text-white min-h-screen">

  {/* Top Banner */}
  <div className="w-full h-64 bg-gradient-to-r from-[#ec7e35] to-[#0070C0] flex items-center justify-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center px-4">
      Sangam Healthcare Support
    </h1>
  </div>

  {/* Main Content */}
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
    
    {/* Section 1 */}
    <div className="bg-white dark:bg-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-5 sm:p-6 shadow-md transition-all duration-700 hover:scale-105">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#0070C0] mb-3">
        Patient Care Services
      </h2>
      <p className="text-base leading-relaxed text-justify">
        We provide professional home care through <strong>Sangam Health Home Care</strong> under the supervision of <strong>Manager Deepa Nishad</strong>. For inquiries, call <strong>+91-7052097771</strong>.
      </p>
    </div>

    {/* Section 2 */}
    <div className="bg-white dark:bg-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-5 sm:p-6 shadow-md transition-all duration-700 hover:scale-105">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#0070C0] mb-3">
        Free Health Camps
      </h2>
      <p className="text-base leading-relaxed text-justify">
        Regular free health camps and medical aid initiatives are conducted for underprivileged communities, focusing on preventive care and treatment outreach.
      </p>
    </div>

    {/* Section 3 */}
    <div className="bg-white dark:bg-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-5 sm:p-6 shadow-md transition-all duration-700 hover:scale-105">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#0070C0] mb-3">
        Upcoming HPSPT Cancer Hospital
      </h2>
      <p className="text-base leading-relaxed text-justify">
        HPSPT is working on establishing a cancer hospital to offer affordable and accessible cancer treatment to patients in need. This initiative aims to provide high-quality oncology care at minimal cost.
      </p>
    </div>
  </div>

  {/* Patient Registration Form */}
  <div className="w-full px-4 sm:px-6 lg:px-8 mt-8 mb-16">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#0070C0] mb-6">
        📝 Sangam Health Home Care – Patient Registration Form
      </h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          title="Patient Registration Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSd7W0KcS4VopOMruskKwLuQ1b50jvB6kiWYtnYd8Zi6g9U8ZQ/viewform?embedded=true"
          className="w-full h-[400px] sm:h-[500px] rounded-xl border border-[#ec7e35]"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
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
