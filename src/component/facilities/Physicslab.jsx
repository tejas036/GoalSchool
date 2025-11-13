import React from "react";

// ---- Static import (only one image)
import g1 from "../../assets/Facilities/labs/PHYSICS LAB (1).jpeg";

const PhysicsLab = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white"></div>

      <main className="flex-grow pt-28 md:pt-32 pb-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-10 md:mb-12">
            <span className="inline-block mb-3 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Facilities
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-tight">
              Laboratories at{" "}
              <span className="text-yellow-600">
                Goal International Public School
              </span>
            </h1>
            <p className="mt-3 text-gray-600">
              Learning by Doing • Innovation • Exploration
            </p>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Left: Image */}
            <section aria-label="Physics Lab" className="order-2 md:order-1">
              <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={g1}
                  alt="Physics Lab"
                  className="w-full h-[400px] object-cover rounded-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </section>

            {/* Right: Text */}
            <aside className="order-1 md:order-2">
              <div className="prose prose-blue max-w-none text-gray-800">
                <p className="text-lg leading-8">
                  At Goal International Public School, we believe that hands-on
                  learning is the key to true understanding. Our school is
                  equipped with modern, well-furnished laboratories that provide
                  students with practical exposure to complement their
                  theoretical knowledge. These labs help students explore,
                  experiment, and innovate in a safe and guided environment.
                </p>

                <h2 className="mt-6 text-2xl font-semibold text-blue-700">
                  Physics Lab
                </h2>
                <p className="mt-3 text-[17px] leading-8">
                  The Physics Lab is designed to ignite curiosity and scientific
                  thinking among students. It is equipped with advanced
                  apparatus and instruments that help students understand core
                  concepts like light, electricity, motion, and energy through
                  real-life experiments.
                </p>

                <p className="mt-4 text-[17px] leading-8">
                  Under the supervision of experienced faculty, students gain
                  practical insight into the scientific principles that shape
                  the world around us, fostering a spirit of discovery and
                  innovation.
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
    </div>
  );
};

export default PhysicsLab;
