import React from "react";
import Navbar from "../../component/Navbar"; // ✅ Navbar path
import Footer from "../../component/Footer"; // ✅ Footer path
import personalisedImage from "../../assets/featureSectionImages/personalisedImagesss.jpg";

const PersonalizedLearningExperience = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-md">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-12 px-6 md:px-16"> {/* Increased pt-32 for more spacing from navbar */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Left Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              src={personalisedImage}
              alt="Personalized Learning Experience at Goal International Public School"
              className="rounded-3xl shadow-xl object-cover w-full h-[450px] transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Text Section */}
          <div className="md:w-1/2 w-full text-gray-800 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-snug">
              Personalized Learning Experience at{" "}
              <span className="text-yellow-600">Goal International Public School</span>
            </h2>

            <p className="text-lg leading-relaxed text-justify">
              At Goal International Public School, Manki, we believe that every child is unique, 
              with individual strengths, learning styles, and interests. Our approach to education 
              is centered on providing a personalized learning experience that nurtures each student’s 
              potential and encourages them to grow at their own pace.
            </p>

            <p className="text-lg leading-relaxed text-justify">
              Through continuous assessment and observation, our teachers identify the specific needs 
              of each learner and design learning plans that cater to their academic, emotional, and 
              creative development. Technology-integrated classrooms, interactive teaching methods, 
              and differentiated instruction ensure that every child engages meaningfully with the curriculum.
            </p>

            <p className="text-lg leading-relaxed text-justify">
              We encourage students to set personal goals, take responsibility for their learning, and 
              explore subjects beyond textbooks. Remedial and enrichment sessions further help bridge 
              learning gaps and extend opportunities for advanced learners.
            </p>

            <p className="text-lg leading-relaxed text-justify">
              At Goal International Public School, personalized learning is not just a method—it’s our 
              commitment to shaping confident, self-motivated, and lifelong learners who are ready to 
              face the challenges of the future.
            </p>

            {/* Back Button */}
            <div>
              <a
                href="/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PersonalizedLearningExperience;
