import React from "react";
import one from "../assets/1.jpg";
import two from "../assets/2.avif";
import three from "../assets/3.avif";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: one,
      title: "ICSE Curriculum",
      hoverColor: "hover:bg-green-100",
    },
    {
      icon: two,
      title: "Personalized Learning Experience",
      hoverColor: "hover:bg-red-100",
    },
    {
      icon: three,
      title: "Quality Education",
      hoverColor: "hover:bg-violet-100",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white mx-auto rounded-lg shadow-lg cursor-pointer">
        {features.map((feature, index) => (
          <Link
            key={index}
            to="/featureSection/IcseCurriculum"
            className={`flex flex-col items-center justify-center p-6 transition-all duration-300 ${feature.hoverColor} text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg`}
            aria-label={feature.title}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="h-16 w-16 mb-4 rounded-2xl object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
