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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Banner */}
      <div className="w-full h-64 bg-gradient-to-r from-[#ec7e35] to-[#0070C0] flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
          Donate & Make a Difference
        </h1>
      </div>

      {/* Description */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6 text-justify leading-relaxed">
        <h2 className="text-3xl font-semibold text-[#0070C0] text-center mb-6">
          Why Your Donation Matters ❤️
        </h2>
        <p>
          Your donation fuels our mission to deliver critical legal, medical, and social services to the most underserved communities in India. Every rupee you contribute goes toward real, measurable change:
          legal aid for wrongly accused individuals, health support for impoverished patients, education for vulnerable children, and more. Through our network of social workers, doctors, and legal professionals,
          we reach places that often go unnoticed, bringing hope and dignity to those who need it most.
        </p>
        <p>
          Imagine someone who’s lost access to treatment because of lack of money. Or a woman wrongfully detained who gets legal aid because you contributed. Or a cancer patient receiving treatment in our
          upcoming affordable hospital because of your some rupees. These aren't just stories they are real people, real transformations made possible by donors like you.
        </p>
        <p>
          We're transparent, committed, and grassroots-driven. Join us in creating a better tomorrow. Your help, no matter how small, can bring justice, health, and hope to someone's doorstep. Be a part of
          meaningful change today.
        </p>
        {/* Repeat or extend similar sections to match 100 lines if needed */}
        {/* <button
          onClick={handlePayment}
          className="mt-10 px-6 py-3 bg-[#ec7e35] text-white rounded-md hover:scale-105 transition duration-300 shadow-md"
        >
          Donate Now via Razorpay
        </button> */}
      </section>

      {/* Google Form */}
      <section className="max-w-5xl mx-auto px-0 py-8">
        <h2 className="text-3xl font-semibold text-center text-[#0070C0] mb-6">
          Donation Registration Form
        </h2>
        <div className="flex justify-center">
          <iframe
            title="Donation Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSczl57S5gI5ICTPEBP0wrFdfuoYI5-jQ0gQdZmXaYyDsIZk6A/viewform?embedded=true"
            width="70%"
            height="500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="rounded-xl border border-[#ec7e35]"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
