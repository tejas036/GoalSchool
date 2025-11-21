import React, { useState, useEffect } from "react";
import bgImage from "../assets/About/IMG_5553.JPG";
import bgImage2 from "../assets/About/IMG_5449.JPG";
import bgImage3 from "../assets/About/IMG_0531.JPG";
import bgImage4 from "../assets/About/IMG_5579.JPG";
import bgImage5 from "../assets/About/DSC_2262.JPG";
import bgImage6 from "../assets/About/IMG_0531.JPG";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const images = [bgImage, bgImage2, bgImage3, bgImage4, bgImage5, bgImage6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/admissionprograms");
  };

  return (
    <header
      className="relative h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
     
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* 🔥 OVERLAY REMOVED — CLEAN BACKGROUND NOW */}
 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-black/10"></div>
      {/* Content */}
      <div className="z-10 container px-4">
        <div className="grid grid-cols-14">
          <div className="col-span-12 md:col-span-9 lg:col-span-7 xl:col-span-6 lg:ml-1">
            <h3 className="text-[16px] leading-snug md:text-3xl font-bold tracking-wider mb-5">
              Welcome to{" "}
              <span className="text-green-500">
                Goal International Public School
              </span>
            </h3>

            <h2 className="text-[42px] capitalize leading-snug md:text-5xl font-bold tracking-wider mb-6">
              India's Best <br />
              <span className="capitalize mt-2">International School</span>
            </h2>

            <div className="md:mr-40 lg:mr-48 lg:mt-10">
              <button
                onClick={handelClick}
                className="navbutton bg-blue-600 text-white py-2 px-6 rounded-md flex items-center hover:bg-blue-700 transition duration-300"
              >
                Admissions Open for AY 2026-2027
                <Icon
                  icon="flowbite:arrow-right-outline"
                  width="16"
                  height="16"
                  style={{ color: "white", marginLeft: "8px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
