import React from "react";
import bannerImg from "../../assets/homeBanner.png";

const BannerSection = () => (
  <section className="relative w-full h-[50vh] sm:h-[26.5vh] md:h-[55vh] lg:h-[55vh] xl:h-[65vh]">
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