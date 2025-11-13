import React, { useState } from "react";

// ---- Static imports for lab images
import b1 from "../../assets/Facilities/labs/BIO LAB (1).JPG";
import b2 from "../../assets/Facilities/labs/BIO LAB (2).JPG";
import b3 from "../../assets/Facilities/labs/BIO LAB (3).JPG";

const galleryImages = [b1, b2, b3];

const BiologyLab = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
      <main className="flex-grow pt-28 md:pt-32 pb-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-10 md:mb-12 text-center">
            <span className="inline-block mb-3 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              Facilities
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-green-800 leading-tight">
              Laboratories at <span className="text-yellow-600">Goal International Public School</span>
            </h1>
            <p className="mt-3 text-gray-600">
              Learning by Doing • Innovation • Exploration
            </p>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Left: Gallery */}
            <section aria-label="Biology Lab gallery" className="order-2 md:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="group relative block overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    aria-label={`Open image ${idx + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Biology Lab photo ${idx + 1}`}
                      className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
              <div className="prose prose-green max-w-none text-gray-800">
                <p className="text-lg leading-8">
                  At Goal International Public School, we believe that hands-on learning is the key to true understanding. Our school is equipped with modern, well-furnished laboratories that provide students with practical exposure to complement their theoretical knowledge. These labs help students explore, experiment, and innovate in a safe and guided environment.
                </p>

                <h2 className="mt-6 text-2xl font-semibold text-green-700">Biology Lab</h2>
                <p className="mt-3 text-[17px] leading-8">
                  The Biology Lab is spacious and well-ventilated, with models, charts, and microscopes that help students explore the wonders of life. Here, students learn through observation and dissection, gaining a deeper understanding of living organisms and biological processes.
                </p>

                <div className="mt-6 text-center">
                  <a
                    href="/facilities"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow transition"
                  >
                    ← Back to Facilities
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

export default BiologyLab;
