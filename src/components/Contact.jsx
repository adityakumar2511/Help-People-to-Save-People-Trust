import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Select",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("https://formsubmit.co/hpsptwebform@gmail.com", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: new FormData(e.target),
  });

  if (response.ok) {
    alert("Your appointment request has been submitted!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Legal Aid",
      message: "",
    });
  } else {
    alert("There was an error submitting the form. Please try again.");
  }
};
``

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      {/* Banner */}
      <div className="w-full h-64 bg-gradient-to-r from-[#ec7e35] to-[#0070C0] flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
           Appointment & Contact Us
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div className="space-y-4 text-lg p-8">
          <h2 className="text-3xl font-semibold text-[#0070C0]">Contact Details</h2>
          <p><strong>Help People To Save People Trust</strong></p>
          <p>Civil Lines, Allahabad, Uttar Pradesh – 211001</p>
          <p><strong>Email:</strong> pahpspt@gmail.com</p>
          <p className="text-xl font-semibold">
            Phone:- +91-8808649962
          </p>
          <p><strong>Website:</strong> https://www.helppeopletosavepeopletrust.org/home</p>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full p-8"
        >
          <h2 className="text-3xl font-semibold text-[#0070C0]">Appointment Form</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-3 rounded-md bg-white dark:bg-gray-800 outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-md bg-white dark:bg-gray-800 outline-none"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full p-3 rounded-md bg-white dark:bg-gray-800 outline-none"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white dark:bg-gray-800 outline-none"
          >
            <option>Legal Aid</option>
            <option>Medical Help</option>
            <option>DCS</option>
            <option>Internship</option>
            <option>Other</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Message"
            className="w-full p-3 rounded-md bg-white dark:bg-gray-800 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-[#ec7e35] text-white font-semibold hover:scale-105 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Map Section */}
      <section className="px-4 sm:px-6 pt-0 mb-10">
        <h2 className="text-3xl font-semibold text-center text-[#0070C0] mb-6">
          Our Location
        </h2>
        <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-md border border-[#ec7e35]">
          <iframe
            title="HPSPT Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28822.977776205138!2d81.80347282514649!3d25.44253512451344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acadfa0e616dd%3A0x136ee6dd4d0a1b83!2z4KS44KS_4KS14KS_4KSyIOCksuCkvuCkh-CkqOCljeCkuCwg4KSq4KWN4KSw4KSv4KS-4KSX4KSw4KS-4KScLCDgpIngpKTgpY3gpKTgpLAg4KSq4KWN4KSw4KSm4KWH4KS2!5e0!3m2!1shi!2sin!4v1753894037241!5m2!1shi!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </section>

    </div>
    
  );
};

export default ContactUs;
