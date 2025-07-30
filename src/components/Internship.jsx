import React from "react";

const InternshipsVolunteer = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Top Banner */}
      <header className="w-full h-64 bg-gradient-to-r from-[#ec7e35] to-[#0070C0] flex items-center justify-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center px-4">
          Internships & Volunteering
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        {/* Description Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-transparent hover:border-[#ec7e35] shadow-md transition duration-700 hover:scale-105">
            <h2 className="text-2xl font-semibold text-[#0070C0] mb-2">
              Internship Opportunities
            </h2>
            <p className="text-base leading-relaxed text-justify">
              We offer hands-on internship programs for students in law, medicine, and social work. Participants gain real-world exposure through field visits, casework, and impact documentation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-transparent hover:border-[#ec7e35] shadow-md transition duration-700 hover:scale-105">
            <h2 className="text-2xl font-semibold text-[#0070C0] mb-2">
              Volunteering & Fieldwork
            </h2>
            <p className="text-base leading-relaxed text-justify">
              Our programs include field-based research, public awareness drives, documentation, and community engagement activities. Volunteers play a key role in reaching marginalized communities.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-transparent hover:border-[#ec7e35] shadow-md transition duration-700 hover:scale-105">
            <h2 className="text-2xl font-semibold text-[#0070C0] mb-2">
              Certificate of Completion
            </h2>
            <p className="text-base leading-relaxed text-justify">
              All eligible interns and volunteers are awarded a Certificate of Completion from HPSPT, validating their contribution and hours served.
            </p>
          </div>
        </section>

        {/* Internship Application Form */}
        <section className="space-y-6 px-2 sm:px-10 align-center">
          <h2 className="text-3xl font-semibold text-center text-[#0070C0]">
            📋 Apply for Internship
          </h2>
          <div className="flex justify-center">
            <iframe
              title="Internship Application Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSf40yyugNZB9HBjWRGRimZR24PWXvqwqmJW0RZycqDZ-Cz9TQ/viewform?embedded=true"
              width="70%"
              height="900"
              frameBorder="0"
              className="rounded-xl border border-[#ec7e35]"
              style={{ overflow: "hidden" }}
            >
              Loading…
            </iframe>
          </div>
        </section>

        {/* Feedback Form */}
        <section className="space-y-6 px-2 sm:px-10">
          <h2 className="text-3xl font-semibold text-center text-[#0070C0]">
            💬 Internship Feedback Form
          </h2>
          <div className="flex justify-center">
            <iframe
              title="Internship Feedback Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLScqHO0rVlTaFlEHSqV7WJG5Ja9hJiaoI61iRHoPv9NXq83Flg/viewform?embedded=true"
              width="70%"
              height="900"
              frameBorder="0"
              className="rounded-xl border border-[#ec7e35]"
              style={{ overflow: "hidden" }}
            >
              Loading…
            </iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InternshipsVolunteer;
