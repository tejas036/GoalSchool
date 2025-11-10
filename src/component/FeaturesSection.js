import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ For navigation
import one from "../assets/1.jpg";
import two from "../assets/2.avif";
import three from "../assets/3.avif";

const FeaturesSection = () => {
  const navigate = useNavigate(); // ✅ Navigation hook

  const features = [
    {
      icon: one,
      title: "ICSE Curriculum",
      hoverColor: "hover:bg-green-100",
      path:"/featureSection/IcseCurriculum"
    },
    {
      icon: two,
      title: "Personalized Learning Experience",
      hoverColor: "hover:bg-red-100",
      path: "/featureSection/personalized-learning", // ✅ Navigation path
    },
    {
      icon: three,
      title: "Quality Education",
      hoverColor: "hover:bg-violet-100",
      path: "/featureSection/quality-education", // ✅ Added navigation path
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white mx-auto rounded-lg shadow-lg cursor-pointer">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => feature.path && navigate(feature.path)} // ✅ Click to navigate
            className={`flex flex-col items-center justify-center p-6 transition-all duration-300 ${feature.hoverColor} text-center hover:shadow-xl rounded-xl`}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="h-16 w-16 mb-4 rounded-2xl object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
