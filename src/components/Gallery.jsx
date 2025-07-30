import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Local images
import img1 from "../assets/case1.jpeg";
import img2 from "../assets/case2.jpeg";
import img3 from "../assets/case3.jpeg";
import img4 from "../assets/case4.jpeg";
import img5 from "../assets/case5.jpeg";
import img6 from "../assets/case6.jpeg";
import img7 from "../assets/case7.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex !== null) {
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "Escape") closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-0 px-0">
      {/* Banner */}
      <div className="w-full h-64 bg-gradient-to-r from-[#ec7e35] to-[#0070C0] flex items-center justify-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center px-4">
          Gallery
        </h1>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto mt-10 mb-16 px-4 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg border border-transparent hover:border-[#ec7e35] transition-all duration-700 hover:scale-105 cursor-pointer"
              onClick={() => openImage(index)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full object-contain"
                style={{ height: "100%", maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white bg-[#ec7e35] rounded-full p-2 hover:bg-orange-600 z-50"
          >
            <X size={24} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-6 text-white bg-[#ec7e35] rounded-full p-2 hover:bg-orange-600 z-50"
          >
            <ChevronLeft size={28} />
          </button>

          <img
            src={images[currentIndex]}
            alt={`Gallery Full ${currentIndex + 1}`}
            className="max-h-[90vh] w-auto object-contain mx-auto z-40"
          />

          <button
            onClick={showNext}
            className="absolute right-6 text-white bg-[#ec7e35] rounded-full p-2 hover:bg-orange-600 z-50"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
