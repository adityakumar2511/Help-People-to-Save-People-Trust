import React from "react";

const DonatePage = () => {
  // const loadRazorpay = () => {
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // };

  // const handlePayment = () => {
  //   loadRazorpay();

  //   const options = {
  //     key: "rzp_test_YourKeyHere", // Replace with your Razorpay Test or Live key
  //     amount: 50000, // 500.00 INR (in paise)
  //     currency: "INR",
  //     name: "Help People To Save People Trust",
  //     description: "Donation to support medical, legal, and social aid",
  //     image: "https://your-logo-url.com/logo.png",
  //     handler: function (response) {
  //       alert("Payment successful. Razorpay ID: " + response.razorpay_payment_id);
  //     },
  //     prefill: {
  //       name: "Your Name",
  //       email: "email@example.com",
  //       contact: "9999999999",
  //     },
  //     theme: {
  //       color: "#ec7e35",
  //     },
  //   };

  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 ">
  {/* Banner */}
  <header className="w-full h-48 md:h-64 bg-gradient-to-r from-[#ec7e35] to-[#0070C0] flex items-center justify-center shadow-md px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center">
      Donate
    </h1>
  </header>

  {/* Description */}
  <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-6 text-justify leading-relaxed">
  <h2 className="text-2xl sm:text-3xl font-semibold text-[#0070C0] text-center mb-6">
    Why Your Donation Matters ❤️
  </h2>

  <div className="bg-white text-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-5 sm:p-6 shadow-md transition-all duration-700 hover:scale-105">
    <p>
      Your donation fuels our mission to deliver critical legal, medical, and social services to the most underserved communities in India. Every rupee you contribute goes toward real, measurable change...
    </p>
  </div>

  <div className="bg-white text-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-5 sm:p-6 shadow-md transition-all duration-700 hover:scale-105">
    <p>
      Imagine someone who’s lost access to treatment because of lack of money. Or a woman wrongfully detained who gets legal aid because you contributed...
    </p>
  </div>

  <div className="bg-white text-gray-800 border border-transparent hover:border-[#ec7e35] rounded-xl p-5 sm:p-6 shadow-md transition-all duration-700 hover:scale-105">
    <p>
      We're transparent, committed, and grassroots-driven. Join us in creating a better tomorrow...
    </p>
  </div>
</section>


  {/* Google Form */}
  <section className="max-w-5xl mx-auto px-4 py-8 sm:py-10">
    <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#0070C0] mb-6">
      Donation Registration Form
    </h2>
    <div className="flex justify-center">
      <iframe
        title="Donation Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSczl57S5gI5ICTPEBP0wrFdfuoYI5-jQ0gQdZmXaYyDsIZk6A/viewform?embedded=true"
        width="100%"
        height="600"
        className="rounded-xl border border-[#ec7e35] sm:w-[90%] md:w-[80%]"
        frameBorder="0"
        allowFullScreen
      >
        Loading…
      </iframe>
    </div>
  </section>
    </div>
  );
};

export default DonatePage;
