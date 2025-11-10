import React from "react";

import medicareImage from "../../assets/featureSectionImages/personalisedImage.jpg"; 
// ✅ Replace with an actual infirmary image later

const Medicare = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
     
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Left Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={medicareImage}
              alt="Infirmary at Goal International Public School"
              className="rounded-3xl shadow-xl object-cover w-full h-[450px] transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Text */}
          <div className="md:w-1/2 w-full text-gray-800 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-snug">
              Infirmary at{" "}
              <span className="text-yellow-600">Goal International Public School</span>
            </h2>

            <p className="text-lg leading-relaxed text-justify">
              At Goal International Public School, the health and well-being of our students are given top priority. 
              The school has a well-equipped infirmary that provides prompt medical attention and care to students 
              in case of any illness or injury during school hours. A trained nurse is available to attend to minor 
              ailments, first aid, and emergencies.
            </p>

            <p className="text-lg leading-relaxed text-justify">
              Regular health check-ups and awareness programs are conducted to promote good hygiene and healthy habits 
              among students. In case of any serious health concern, parents are immediately informed, and appropriate 
              medical assistance is arranged.
            </p>

            <p className="text-lg leading-relaxed text-justify">
              The infirmary ensures that every child feels safe, cared for, and supported in a healthy school environment, 
              aligning with our vision of providing holistic education and overall well-being.
            </p>

            {/* Back Button */}
            <div>
              <a
                href="/facilities"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
              >
                ← Back to Facilities
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    
    </div>
  );
};

export default Medicare;
