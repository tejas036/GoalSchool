import React from "react";
import Navbar from "../../component/Navbar"; // ✅ Navbar path
import Footer from "../../component/Footer"; // ✅ Footer path
import qualityEducationImage from "../../assets/featureSectionImages/QualityEducation.jpg"; // ✅ Image path

const QualityEducation = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-md">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Left Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              src={qualityEducationImage}
              alt="Quality Education at Goal International Public School"
              className="rounded-3xl shadow-xl object-cover w-full h-[450px] transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Text Section */}
          <div className="md:w-1/2 w-full text-gray-800 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-snug">
              Quality Education at{" "}
              <span className="text-yellow-600">
                Goal International Public School
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-justify">
              Goal International Public School is recognized for delivering
              quality education with an emphasis on academic excellence and
              holistic development, evident from positive feedback and strong
              reputation among parents, students, and the community.
            </p>

            <p className="text-lg leading-relaxed text-justify">
              Feedback from parents and community members highlights the
              commitment and expertise of the teaching staff, who provide not
              only strong academic instruction but also engage students in
              extracurricular activities and instill values like discipline,
              confidence, and creativity. Such a balanced approach is central to
              quality education standards.
            </p>

            <p className="text-lg leading-relaxed text-justify">
              Goal International Public School maintains a commendable standard
              for quality education through its professional teaching staff,
              strong infrastructure, and commitment to student-centered learning
              and holistic growth.
            </p>

            {/* Back Button */}
            <div>
              {/* <a
                href="/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
              >
                ← Back to Home
              </a> */}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default QualityEducation;
