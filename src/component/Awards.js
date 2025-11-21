import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

// Award Images
import globaltriumph from "../assets/awards/globaltriumph.jpg";
import educationToday2018 from "../assets/awards/educationtoday.jpg";
import educationToday2019 from "../assets/awards/global2.jpg";
import educationToday2020 from "../assets/awards/excellence.jpg";
import globalExcellence2023 from "../assets/awards/globaltriumph.jpg";
import globalExcellence2024 from "../assets/awards/educationtoday.jpg";

const cards = [
  {
    title: "India's top ICSE school parameter wise by Education Today 2018-19",
    image: educationToday2018,
    bgColor: "bg-blue-50",
  },
  {
    title: "Top 5 Public School in Karnataka by Education Today 2019",
    image: educationToday2019,
    bgColor: "bg-yellow-50",
  },
  {
    title: "Excellence in academics by Global Triumph Foundation 2023",
    image: globalExcellence2023,
    bgColor: "bg-indigo-50",
  },
  {
    title: "Excellence in education by Global Triumph Foundation 2024",
    image: globalExcellence2024,
    bgColor: "bg-green-50",
  },
  {
    title:
      "Exclusive Contribution in School Education by the Global Triumph Foundation 2024",
    image: globaltriumph,
    bgColor: "bg-red-50",
  },
  {
    title: "India's top ICSE school- Parameter wise by Education Today 2020-21",
    image: educationToday2020,
    bgColor: "bg-purple-50",
  },
];

const CardItem = ({ item, isVisible }) => (
  <div
    className={`w-full transform transition-all duration-1000 ease-out hover:shadow-xl
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      ${item.bgColor} p-4 sm:p-6 rounded-xl shadow-md border border-gray-200`}
  >
    <div className="mb-4 flex justify-center">
      <img
        src={item.image}
        alt="Award Logo"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
      />
    </div>
    <h5 className="text-sm sm:text-md font-semibold text-gray-800 text-center leading-snug">
      {item.title}
    </h5>
  </div>
);

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

const Awards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-14 md:py-20 bg-white text-gray-700"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold md:text-[36px] text-blue-700">
            School Awards
          </h2>
        </div>

        {/* Responsive Grid Fix */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((item, i) => (
            <CardItem key={i} item={item} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
