import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import imagebg from '../../assets/Facilities/knowledge.jpg';
import BooksList from "./BooksList";

import g4 from "../../assets/Facilities/library/l1.JPG";
import g5 from "../../assets/Facilities/library/l2.JPG";
import g6 from "../../assets/Facilities/library/l3.JPG";
import g7 from "../../assets/Facilities/library/l4.JPG";
import g8 from "../../assets/Facilities/library/l5.JPG";
import g9 from "../../assets/Facilities/library/l6.JPG";
import g10 from "../../assets/Facilities/library/l7.JPG";
import g11 from "../../assets/Facilities/library/l8.JPG";
import g12 from "../../assets/Facilities/library/l9.JPG";

const galleryImages = [g4, g5, g6, g7, g8, g9, g10, g11, g12];

const features = [
  { text: "Extensive library with physical and digital resources." },
  { text: "Dedicated study pods for focused learning." },
  { text: "Access to global databases and online research tools." },
  { text: "Librarians to guide students in finding relevant materials." },
  { text: "Collaborative spaces for group projects and discussions." },
];

const FeatureItem = ({ item, index }) => {
  const { text } = item;
  return (
    <>
      <div className="mb-4">
        <FontAwesomeIcon
          icon={faCheck}
          className="fas fa-check text-blue-600 mr-2 text-sm"
        />
        <span className="opacity-75 text-[12px]">{text}</span>
      </div>

      {index !== features.length && <hr className="w-11/12 my-2" />}
    </>
  );
};

FeatureItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const KnowledgeCenter = () => {
  // Track loaded state for each image
  const [loaded, setLoaded] = useState(() => galleryImages.map(() => false));

  const handleImageLoad = (idx) => {
    setLoaded((prev) => {
      const copy = [...prev];
      copy[idx] = true;
      return copy;
    });
  };

  return (
    <>
      <section className="py-14 md:px-24 text-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-12 items-center gap-4 mb-12">
            {/* Text Section */}
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-2xl leading-none font-bold uppercase tracking-wider mb-2">
                Library
              </h1>
              <hr className="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
              <p className="opacity-70 mb-2 text-[14px]">
                Our Library is the hub of learning and research at Goal School.
                It offers an extensive collection of resources, advanced tools
                for research, and collaborative spaces to encourage innovation
                and self-paced learning.
              </p>
              <ul className="flex flex-col mt-5 text-[12px]">
                {features.map((item, i) => (
                  <li key={i}>
                    <FeatureItem item={item} index={i + 1} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Section */}
            <div className="col-span-12 lg:col-span-6">
              <section
                aria-label="Library gallery"
                className="order-2 md:order-1"
              >
                <div
                  className="
                    grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                    gap-3 sm:gap-4 
                    auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[200px]
                  "
                >
                  {galleryImages.map((src, idx) => {
                    // Assign some tiles to span multiple rows/cols for a collage look
                    const layoutClass =
                      idx % 7 === 0
                        ? "col-span-2 row-span-2"
                        : idx % 5 === 0
                        ? "row-span-2"
                        : "row-span-1 col-span-1";

                    const isLoaded = loaded[idx];

                    return (
                      <button
                        key={idx}
                        className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${layoutClass}`}
                        aria-label={`Image ${idx + 1} of ${galleryImages.length}`}
                      >
                        {/* Skeleton: only rendered when NOT loaded */}
                        {!isLoaded && (
                          <div className="w-full h-full bg-gray-200 animate-pulse" />
                        )}

                        {/* Actual image */}
                        <img
                          src={src}
                          alt={`Library photo ${idx + 1}`}
                          className={`
                            w-full h-full object-cover 
                            transition-transform duration-500 group-hover:scale-105
                            ${isLoaded ? "opacity-100" : "opacity-0"}
                          `}
                          loading="lazy"
                          decoding="async"
                          onLoad={() => handleImageLoad(idx)}
                        />

                        {/* Overlay + "View" chip */}
                        {isLoaded && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-2 right-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                              <span className="inline-flex items-center justify-center rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-gray-800 shadow">
                                View
                              </span>
                            </div>
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <BooksList />
    </>
  );
};

export default KnowledgeCenter;
