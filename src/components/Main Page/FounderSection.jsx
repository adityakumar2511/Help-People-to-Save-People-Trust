import React from "react";
import FounderImg from "../../assets/FounderImg.png";

const FounderSection = () => (
  <section className="w-full px-6 py-16 mt-0 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="opacity-0 animate-fade-in-left">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Founder’s Profile</h2>
        <p className="text-lg text-[#ec7e35] font-semibold mb-1">Mr. Shashank Dhuliya</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-3">
          Founder & National President<br />
          Help People To Save People Trust<br />
          Practising Lawyer at Allahabad High Court<br />
          Legal & Social Reformer | Director, DCS
        </p>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-4 mb-2">Professional Background</h3>
        <p className="text-md text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
          Mr. Shashank Dhuliya is a dedicated legal professional... (trimmed for brevity)
        </p>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-6 mb-2">Education & Expertise</h3>
        <p className="text-md text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
          <strong>LL.B.</strong> Allahabad State University<br />
          <strong>Expertise:</strong> Criminal Law, PIL, Human Rights, NGO Law, RTI
        </p>
      </div>
      <div className="opacity-0 animate-fade-in-right w-full flex justify-center">
        <img
          src={FounderImg}
          alt="Adv. Shashank Dhuliya"
          className="w-100 h-100 object-cover rounded-xl shadow-xl border-4 border-[#ec7e35] hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  </section>
);

export default FounderSection;