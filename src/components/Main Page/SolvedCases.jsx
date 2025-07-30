import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import case1 from "../../assets/case1.jpeg";
import case2 from "../../assets/case2.jpeg";
import case3 from "../../assets/case3.jpeg";
import case4 from "../../assets/case4.jpeg";
import case5 from "../../assets/case5.jpeg";
import case6 from "../../assets/case6.jpeg";
import case7 from "../../assets/case7.jpeg";

const images = [case1, case2, case3, case4, case5, case6, case7];

const SolvedCases = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-tr mt-20 from-[#1e293b] to-[#0f172a] text-white relative">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0070C0] mb-4">Solved Cases</h2>
        <p className="text-lg text-gray-200">A glimpse of our resolved milestones</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          effect="coverflow"
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <img
                  src={src}
                  alt={`Case ${index + 1}`}
                  className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-full max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[photoIndex]}
              alt={`Full Image ${photoIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl object-contain"
            />
          </div>

          {/* Close Button (top right of screen) */}
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-6 right-6 text-white text-4xl hover:text-red-500 z-50"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Prev Button (left edge) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPhotoIndex((photoIndex + images.length - 1) % images.length);
            }}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-[#ec7e35] px-2 z-50"
          >
            &#10094;
          </button>

          {/* Next Button (right edge) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPhotoIndex((photoIndex + 1) % images.length);
            }}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-[#ec7e35] px-2 z-50"
          >
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
};

export default SolvedCases;
