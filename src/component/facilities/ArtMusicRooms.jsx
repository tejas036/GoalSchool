

import artMusicImage from "../../assets/featureSectionImages/personalisedImage.jpg";
 // ✅ You’ll add this image

const ArtMusicRooms = () => {
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
              src={artMusicImage}
              alt="Art and Music Rooms at Goal International Public School"
              className="rounded-3xl shadow-xl object-cover w-full h-[450px] transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Text */}
          <div className="md:w-1/2 w-full text-gray-800 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-snug">
              Art and Music Rooms at{" "}
              <span className="text-yellow-600">Goal International Public School</span>
            </h2>

            <p className="text-lg leading-relaxed text-justify">
              At Goal International Public School, art and music are integral parts of our educational journey,
              nurturing creativity and self-expression among students. We believe that these forms of art play a
              vital role in shaping a child’s imagination, confidence, and emotional growth.
            </p>

            <p className="text-lg leading-relaxed text-justify">
              Our art classes encourage students to explore their creativity through drawing, painting, and
              craftwork. Students are guided to express their ideas freely, experiment with colors and techniques,
              and showcase their artwork in school exhibitions and competitions.
            </p>

            <p className="text-lg leading-relaxed text-justify">
              In music, students are trained in both vocal and instrumental forms. They learn rhythm, melody, and
              harmony, participating in various school events, assemblies, and cultural programs. The music room is
              equipped with instruments like keyboards, guitars, drums, and traditional Indian instruments to
              enhance their learning experience.
            </p>

            <p className="text-lg leading-relaxed text-justify">
              Through art and music, Goal International Public School strives to foster aesthetic appreciation,
              cultural understanding, and a lifelong love for creativity and expression in every student.
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

export default ArtMusicRooms;
