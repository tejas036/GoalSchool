import React, { useState } from "react";

// ---- Static import for one large Biology Lab image
import bioLabMain from "../../assets/Facilities/labs/BIO LAB (1).JPG";

const BiologyLab = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
              Laboratories at{" "}
              <span className="text-yellow-600">Goal International Public School</span>
            </h1>
            <p className="mt-3 text-gray-600">
              Learning by Doing • Innovation • Exploration
            </p>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Left: Large Image */}
            <section aria-label="Biology Lab gallery" className="order-2 md:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-lg group">
                <img
                  src={bioLabMain}
                  alt="Biology Lab"
                  className="w-full h-[400px] md:h-[550px] object-cover object-center rounded-3xl transition-transform duration-700 group-hover:scale-105"
                  onClick={() => setLightboxOpen(true)}
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-center justify-center">
                  {/* <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-gray-800 shadow">
                    View Full Image
                  </span> */}
                </div>
              </div>
            </section>

            {/* Right: Text */}
            <aside className="order-1 md:order-2">
              <div className="prose prose-green max-w-none text-gray-800">
                <p className="text-lg leading-8">
                  At Goal International Public School, we believe that hands-on
                  learning is the key to true understanding. Our school is equipped
                  with modern, well-furnished laboratories that provide students with
                  practical exposure to complement their theoretical knowledge. These
                  labs help students explore, experiment, and innovate in a safe and
                  guided environment.
                </p>

                <h2 className="mt-6 text-2xl font-semibold text-green-700">
                  Biology Lab
                </h2>
                <p className="mt-3 text-[17px] leading-8">
                  The Biology Lab is spacious and well-ventilated, with models,
                  charts, and microscopes that help students explore the wonders of
                  life. Here, students learn through observation and dissection,
                  gaining a deeper understanding of living organisms and biological
                  processes.
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
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={bioLabMain}
            alt="Biology Lab Large View"
            className="w-full max-w-5xl max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 bg-white/90 hover:bg-white text-gray-800 rounded-full px-4 py-1 text-sm font-semibold shadow"
          >
            ✕ Close
          </button>
        </div>
      )}
    </div>
  );
};

export default BiologyLab;
