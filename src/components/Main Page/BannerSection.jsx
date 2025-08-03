import React from "react";
import bannerImg from "../../assets/homeBanner.jpeg";

const BannerSection = () => (
  <section className="relative w-full h-[25vh] sm:h-[25vh] md:h-[65vh] lg:h-[70vh] xl:h-[70vh]">
  <div className="absolute inset-0 w-full h-full">
    <img
      src={bannerImg}
      alt="Banner"
      className="w-full h-full object-cover object-center"
    />
  </div>
    {/* <div className="relative z-10 flex items-center justify-center h-full">
      <h1 className="text-white text-4xl font-bold">Welcome to Our Platform</h1>
    </div> */}
  </section>
);

export default BannerSection;