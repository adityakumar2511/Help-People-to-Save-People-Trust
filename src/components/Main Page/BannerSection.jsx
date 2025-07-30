import React from "react";
import bannerImg from "../../assets/homeBanner.png";

const BannerSection = () => (
  <section className="relative w-full min-h-[50vh] lg:min-h-[80vh]">
    <div className="absolute inset-0 w-full h-full z-0">
      <img
        src={bannerImg}
        alt="Banner Background"
        className="w-full h-full object-cover object-center"
      />
    </div>
    {/* <div className="relative z-10 flex items-center justify-center h-full">
      <h1 className="text-white text-4xl font-bold">Welcome to Our Platform</h1>
    </div> */}
  </section>
);

export default BannerSection;