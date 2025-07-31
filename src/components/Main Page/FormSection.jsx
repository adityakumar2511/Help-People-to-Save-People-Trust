import React from "react";

const DualForms = () => {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white mt-20 px-4 sm:px-6 lg:px-10 py-10">
  {/* Grid Layout for Forms */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Membership Form */}
    <div className="w-full">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#0070C0] mb-4">
        Membership Registration Form
      </h2>
      <div className="w-full h-[450px] sm:h-[500px] md:h-[550px] rounded-xl overflow-hidden shadow-lg border border-[#ec7e35] mt-6 sm:mt-10">
        <iframe
          title="Membership Registration Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf_OBUkaY1gZNt6TyTmDpGYZwA6N4InjTNcHnN8yAxRdf-FZA/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="w-full h-full"
        >
          Loading…
        </iframe>
      </div>
    </div>

    {/* Complaint Form */}
    <div className="w-full">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#0070C0] mb-4">
        Complaint Registration Form
      </h2>
      <div className="w-full h-[450px] sm:h-[500px] md:h-[550px] rounded-xl overflow-hidden shadow-lg border border-[#ec7e35] mt-6 sm:mt-10">
        <iframe
          title="Complaint Registration Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdCUKOGQ4iaNoB_Lsq8cuSOpcFVK1GmvkPbgdK3AVQfOTUbOA/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="w-full h-full"
        >
          Loading…
        </iframe>
      </div>
    </div>
    
  </div>
</section>

  );
};

export default DualForms;
