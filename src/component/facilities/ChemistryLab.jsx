import React, { useState } from "react";

// Static imports for Chemistry Lab images
import g1 from "../../assets/Facilities/labs/CHEM. LAB (1).JPG";
import g2 from "../../assets/Facilities/labs/CHEM. LAB (2).JPG";

const galleryImages = [g1, g2];

const ChemistryLab = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (i) => {
    setActiveIndex(i);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImg = (e) => {
    e?.stopPropagation();
    setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  };
  const nextImg = (e) => {
    e?.stopPropagation();
    setActiveIndex((i) => (i + 1) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex flex-col">
      <main className="flex-grow pt-28 md:pt-32 pb-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-10 md:mb-12 text-center">
            <span className="inline-block mb-3 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Facilities
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-tight">
              Laboratories at{" "}
              <span className="text-yellow-600">Goal International Public School</span>
            </h1>
            <p className="mt-3 text-gray-600">
              Learning by Doing • Innovation • Exploration
            </p>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Left: Gallery */}
            <section aria-label="Chemistry Lab gallery" className="order-2 md:order-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {galleryImages.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="group relative block overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`Open image ${idx + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Chemistry Lab photo ${idx + 1}`}
                      className="w-full h-full object-cover aspect-[4/3] md:h-[200px] transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 right-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      <span className="inline-flex items-center justify-center rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-gray-800 shadow">
                        View
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Right: Text */}
            <aside className="order-1 md:order-2">
              <div className="prose prose-blue max-w-none text-gray-800">
                <p className="text-lg leading-8">
                  At Goal International Public School, hands-on learning is key to understanding. Our Chemistry Lab is modern and fully equipped to let students safely explore chemical reactions and molecular structures.
                </p>

                <h2 className="mt-6 text-2xl font-semibold text-green-700">Chemistry Lab</h2>
                <p className="mt-3 text-[17px] leading-8">
                  The Chemistry Lab allows students to perform experiments safely and effectively, helping them gain practical knowledge of compounds, reactions, and chemical processes.
                </p>

                <div className="mt-6">
                  <a
                    href="/facilities"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow transition"
                  >
                    <span>← Back to Facilities</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={galleryImages[activeIndex]}
              alt={`Large view ${activeIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute -top-10 right-0 md:-top-12 md:-right-12 bg-white/90 hover:bg-white text-gray-800 rounded-full px-3 py-1 text-sm font-semibold shadow"
              aria-label="Close"
            >
              Close ✕
            </button>

            <button
              onClick={prevImg}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextImg}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {activeIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChemistryLab;
