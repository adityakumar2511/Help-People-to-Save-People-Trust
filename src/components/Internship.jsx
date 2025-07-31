import React from "react";

const InternshipsVolunteer = () => {
  return (
    <div className="min-h-screen bg-gray-100  text-gray-800 dark:text-white">
  {/* Top Banner */}
  <header className="w-full h-48 md:h-64 bg-gradient-to-r from-[#ec7e35] to-[#0070C0] flex items-center justify-center shadow-md px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center">
      Internships & Volunteering
    </h1>
  </header>

  {/* Main Content */}
  <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-20">
    {/* Description Cards */}
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Internship Opportunities",
          text: "We offer hands-on internship programs for students in law, medicine, and social work. Participants gain real-world exposure through field visits, casework, and impact documentation.",
        },
        {
          title: "Volunteering & Fieldwork",
          text: "Our programs include field-based research, public awareness drives, documentation, and community engagement activities. Volunteers play a key role in reaching marginalized communities.",
        },
        {
          title: "Certificate of Completion",
          text: "All eligible interns and volunteers are awarded a Certificate of Completion from HPSPT, validating their contribution and hours served.",
        },
      ].map((card, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-transparent hover:border-[#ec7e35] shadow-md transition duration-700 hover:scale-105"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#0070C0] mb-2">
            {card.title}
          </h2>
          <p className="text-base leading-relaxed text-justify">{card.text}</p>
        </div>
      ))}
    </section>

    {/* Internship Application Form */}
    <section className="space-y-6 px-2 sm:px-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#0070C0]">
        📋 Apply for Internship
      </h2>
      <div className="w-full flex justify-center">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
          <iframe
            title="Internship Application Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf40yyugNZB9HBjWRGRimZR24PWXvqwqmJW0RZycqDZ-Cz9TQ/viewform?embedded=true"
            className="w-full h-[750px] sm:h-[800px] md:h-[900px] rounded-xl border border-[#ec7e35]"
            frameBorder="0"
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>

    {/* Feedback Form */}
    <section className="space-y-6 px-2 sm:px-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#0070C0]">
        💬 Internship Feedback Form
      </h2>
      <div className="w-full flex justify-center">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
          <iframe
            title="Internship Feedback Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLScqHO0rVlTaFlEHSqV7WJG5Ja9hJiaoI61iRHoPv9NXq83Flg/viewform?embedded=true"
            className="w-full h-[750px] sm:h-[800px] md:h-[900px] rounded-xl border border-[#ec7e35]"
            frameBorder="0"
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  </main>
</div>

  );
};

export default InternshipsVolunteer;
