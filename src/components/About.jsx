import React from "react";

const AboutUs = () => {
  return (
    <section className="relative bg-gray-100 text-gray-800 dark:text-white mb-10 overflow-x-hidden">
      {/* Banner */}
      <div className="w-full h-48 sm:h-64 bg-gradient-to-r from-[#ec7e35] to-[#0070C0] flex items-center justify-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center">
          About Us
        </h1>
      </div>

      {/* Content */}
      <div className="w-full max-w-[95vw] md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* About Box */}
        <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-700 transform hover:scale-105 border border-transparent hover:border-[#ec7e35]">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0070C0] mb-6">
            About
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            <strong>Help People to Save People Trust (HPSPT)</strong> is a registered non-profit organization committed to providing legal, medical, and social support to marginalized communities across India. Established with a strong vision for justice and dignity, the Trust works through a network of legal professionals, healthcare providers, and social workers.
          </p>
        </div>

        {/* History | Vision | Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Our Story */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-md p-6 transition-all duration-700 transform hover:scale-105 border border-transparent hover:border-[#ec7e35] hover:shadow-xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0070C0] mb-4 text-center">
              📜 Our Story
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-justify">
              Founded in 2017, HELP PEOPLE TO SAVE PEOPLE TRUST was born from a bold vision to protect the helpless, support the unheard, and bring justice, dignity, and healthcare to those left behind. Registered under the Indian Trust Act (Reg. No. 493/17), the Trust began its mission from Civil Lines, Allahabad (Prayagraj), Uttar Pradesh, under the leadership of dedicated social workers and legal professionals, led by our National President, Shashank Dhuliya.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-md p-6 transition-all duration-700 transform hover:scale-105 border border-transparent hover:border-[#ec7e35] hover:shadow-xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0070C0] mb-4 text-center">
              🌍 Our Vision
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-justify">
              To build a nation where justice is accessible, dignity is preserved, and healthcare is a right not a privilege. We envision a society where every individual, especially the vulnerable and marginalized, lives with security, equality, and respect. HELP PEOPLE TO SAVE PEOPLE TRUST strives to ensure that no one is left unheard, unseen, or unaided, and that compassion becomes the foundation of progress.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-md p-6 transition-all duration-700 transform hover:scale-105 border border-transparent hover:border-[#ec7e35] hover:shadow-xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0070C0] mb-4 text-center">
              🎯 Our Mission
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-justify">
              At HELP PEOPLE TO SAVE PEOPLE TRUST, our mission is to serve the underprivileged with compassion, integrity, and urgency. We work to ensure access to justice, quality healthcare, and social support for every individual in need regardless of caste, creed, or background. Guided by the principles of humanity and the Constitution of India, we are committed to protecting the rights and dignity of the poor, the voiceless, the elderly, and the vulnerable, creating a just and inclusive society for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
