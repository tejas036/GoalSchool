import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

// Main Image
import qualityEducationImage from "../../assets/featureSectionImages/QualityEducation.jpg";

// Gallery Images
import img20191 from "../../assets/featureSectionImages/20191.jpg";
import img20192 from "../../assets/featureSectionImages/20192.jpg";
import img20194 from "../../assets/featureSectionImages/20194.jpg";
import img20215 from "../../assets/featureSectionImages/20215.jpg";
import img20246 from "../../assets/featureSectionImages/20246.jpeg";
import img20247 from "../../assets/featureSectionImages/20247.jpeg";
import img20248 from "../../assets/featureSectionImages/20248.jpeg";
import img20259 from "../../assets/featureSectionImages/20259.jpeg";
import img202510 from "../../assets/featureSectionImages/202510.jpeg";

const QualityEducation = () => {
  const galleryImages = [
    img20191,
    img20192,
    img20194,
    img20215,
    img20246,
    img20247,
    img20248,
    img20259,
    img202510,
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col">

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
        <Navbar />
      </div>

      {/* MAIN SECTION */}
      <main className="flex-grow pt-32 pb-20 px-6 md:px-16">
        
        {/* Header Title same as Sports layout */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 max-w-6xl mx-auto">
          Quality Education at{" "}
          <span className="text-yellow-600">Goal International Public School</span>
        </h2>

        {/* Sub heading style same as sports */}
        <p className="text-gray-700 text-lg mt-2 max-w-6xl mx-auto">
          Academic Excellence • Discipline • Holistic Development • Student Growth
        </p>

        <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-start gap-16">

          {/* LEFT IMAGE */}
          <div className="md:w-1/2 w-full">
            <img
              src={qualityEducationImage}
              alt="Quality Education"
              className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
            />
          </div>

          {/* RIGHT TEXT — EXACT SAME FORMATTING AS SPORTS PAGE */}
          <div className="md:w-1/2 w-full text-gray-800 space-y-6 text-justify">

            <p className="text-lg leading-relaxed">
              At Goal International Public School, we are committed to providing
              a strong educational foundation that focuses on academic excellence,
              value-based learning, and the overall development of every student.
            </p>

            <p className="text-lg leading-relaxed">
              Our teaching staff is dedicated, experienced, and passionate about
              nurturing each child’s abilities. Feedback from parents and the
              community consistently highlights the professionalism, care, and
              quality teaching delivered at our institution.
            </p>

            <p className="text-lg leading-relaxed">
              We ensure that students receive holistic learning experiences that
              build confidence, communication skills, character, leadership, and
              creativity while maintaining strong academic standards.
            </p>

            {/* Bullet points same as Sports section */}
            <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
              <li>Strong academic foundation and conceptual learning</li>
              <li>Experienced and qualified teaching staff</li>
              <li>Focus on discipline, values, personality, and confidence</li>
              <li>Interactive classroom learning with modern teaching methods</li>
              <li>Focus on extracurricular and co-curricular development</li>
            </ul>
          </div>
        </div>

        {/* GALLERY (Sports style clean grid) */}
        <div className="max-w-6xl mx-auto mt-20">
          
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Glimpses of Quality Education at GIPS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="w-full h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`Quality ${index}`}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default QualityEducation;
