import React, { useState } from "react";


// ---- Static imports (simple & reliable in CRA). Rename paths if needed.
// import g1 from "../../assets/Facilities/sports/WhatsApp Image 2025-11-07 at 9.34.45 AM.jpeg";
// import g2 from "../../assets/Facilities/sports/WhatsApp Image 2025-11-07 at 9.34.48 AM (1).jpeg";
// import g3 from "../../assets/Facilities/sports/WhatsApp Image 2025-11-07 at 9.34.48 AM.jpeg";
import g4 from "../../assets/Facilities/sports/_DSC0013.JPG";
import g5 from "../../assets/Facilities/sports/DSC_2058.JPG";
import g6 from "../../assets/Facilities/sports/DSC_2063.JPG";
import g7 from "../../assets/Facilities/sports/DSM_8904.JPG";
import g8 from "../../assets/Facilities/sports/DSM_8910.JPG";
import g9 from "../../assets/Facilities/sports/DSM_9161.JPG";
import g10 from "../../assets/Facilities/sports/DSM_9171.JPG";
import g11 from "../../assets/Facilities/sports/DSM_9177.JPG";
import g12 from "../../assets/Facilities/sports/DSM_9183.JPG";

const galleryImages = [g4, g5, g6, g7, g8, g9, g10, g11, g12];


const Library = () => {
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
      {/* If you have a fixed navbar, keep this */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
        {/* navbar content */}
      </div>

      {/* Main */}
      <main className="flex-grow pt-28 md:pt-32 pb-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Title row */}
          <header className="mb-10 md:mb-12">
            <span className="inline-block mb-3 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Facilities
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-tight">
              Sports at{" "}
              <span className="text-yellow-600">Goal International Public School</span>
            </h1>
            <p className="mt-3 text-gray-600">
              Fitness • Teamwork • Discipline • Sportsmanship
            </p>
          </header>

          {/* Equal two columns on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Left: Gallery */}
            <section aria-label="Sports gallery" className="order-2 md:order-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {galleryImages.map((src, idx) => {
                  // simple variety: make every 3rd tile tall on md+
                  const tall = (idx + 1) % 3 === 0;
                  return (
                    <button
                      key={idx}
                      onClick={() => openLightbox(idx)}
                      className={`group relative block overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        tall ? "md:row-span-2" : ""
                      }`}
                      aria-label={`Open image ${idx + 1} of ${galleryImages.length}`}
                    >
                      <img
                        src={src}
                        alt={`Sports photo ${idx + 1}`}
                        className={`w-full h-full object-cover ${
                          tall ? "aspect-[3/4] md:h-[380px]" : "aspect-[4/3] md:h-[180px]"
                        } transition-transform duration-500 group-hover:scale-105`}
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
                  );
                })}
              </div>
            </section>

            {/* Right: Text (equal width with left) */}
            <aside className="order-1 md:order-2">
              <div className="prose prose-blue max-w-none text-gray-800">
                <p className="text-lg leading-8">
                  At Goal International Public School, sports and physical education form
                  an essential part of the curriculum. We believe sports not only build
                  physical strength but also foster discipline, teamwork, leadership, and
                  perseverance.
                </p>

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[15px] leading-7">
                  <li className="before:content-['•'] before:mr-2 before:text-yellow-600">
                    Cricket &amp; Volleyball
                  </li>
                  <li className="before:content-['•'] before:mr-2 before:text-yellow-600">
                    Badminton &amp; Athletics
                  </li>
                  <li className="before:content-['•'] before:mr-2 before:text-yellow-600">
                    Chess &amp; Carrom
                  </li>
                  <li className="before:content-['•'] before:mr-2 before:text-yellow-600">
                    Yoga &amp; PT sessions
                  </li>
                </ul>

                <p className="mt-4 text-[17px] leading-8">
                  Regular physical training sessions and inter-house competitions
                  encourage students to participate actively and showcase their talents.
                  Our annual Sports Day celebrates healthy competition and sportsmanship.
                </p>

                <p className="mt-4 text-[17px] leading-8">
                  Students are encouraged to represent the school in inter-school,
                  State-level, and National-level tournaments—consistently bringing
                  laurels to the institution.
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

export default Library;

