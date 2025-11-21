
import newsletter from "../assets/magzine/jan24.jpg";
import magzineJan from "../assets/magzine/monthly magazine JAN.pdf";
import magzineFeb from "../assets/magzine/monthly magazine FEB.pdf";
import magzineMar from "../assets/magzine/monthly magazine MARCH.pdf";
import magzineJune from "../assets/magzine/June Magazine  2025.pdf";
import magzineJuly from "../assets/magzine/July,. Magazine 2025.pdf";
import magzineSept from "../assets/magzine/September.Magazine  2025.pdf";
import magzineOct from "../assets/magzine/october Magazine  2025.pdf";
import magzineNov from "../assets/magzine/monthly magazine NOV.pdf";
import magzineDec from "../assets/magzine/monthly magazine DEC.pdf";
import magzineAug from "../assets/magzine/August Magazine  2025.pdf"

import annualDayImg from "../assets/magzine/feb24.jpg";


import juneImg from "../assets/magzine/june25.jpg";
import julyImg from "../assets/magzine/july25.jpg";
import septImg from "../assets/magzine/sep25.jpg";
import octImg from "../assets/magzine/oct25.jpg";
import novImg from "../assets/magzine/nov 24.jpg";
import decImg from "../assets/magzine/dec24.jpg";
import augImg from "../assets/magzine/aug25.jpg";
import marchImg from "../assets/magzine/march24.jpg"
import Navbar from "./Navbar";
import Footer from "./Footer";
const PublicationsPage = () => {
  const publications = [
    {
      id: 1,
      // title: "Annual School Magazine 2024",
      title: "Monthly School Magazine January",
      description:
        "A Formattive Assesmet, PTM, 76th Republic Day Celebration, Prize Distribution Ceremony and more.",
      image: newsletter,
      link: magzineJan,
    },
    {
      id: 2,
      title: "Monthly School Magazine February",
      description:
        "Annula Day Celebration,National Science Day Celebration and more.",
      image: annualDayImg,
      link: magzineFeb,
    },
    {
      id: 3,
      title: "Monthly School Magazine March",
      description:
        "Graduation Day Celebration, Women Day Celebration, Summative Assesment II and more.",
      image: marchImg,
      link: magzineMar,
    },
    {
      id: 4,
      title: "Monthly School Magazine June",
      description:
        "School Reopen Day,World Environment Day,Father's Day, Yoga Day and more.",
      image: juneImg,
      link: magzineJune,
    },
    {
      id: 5,
      title: "Monthly School Magazine July",
      description:
        "Guru Purnima,KISA Dance Competition,International Chess Day ,Kargil Vijay Diwas and more.",
      image: julyImg,
      link: magzineJuly,
    },
    {
      id: 6,
      title: "Monthly School Magazine August",
      description:
        "KISA Competition,Independance Day ,Raksha Bandhan Celebration,Ganesh Chaturthi Celebration.",
      image: augImg,
      link: magzineAug,
    },
    {
      id: 7,
      title: "Monthly School Magazine September",
      description:
        "Teacher's Day,Ganesh Chaturthi Celebration,Parent - Teacher Meeting,Activity based lessons and more.",
      image:septImg ,
      link: magzineSept,
    },
    {
      id: 8,
      title: "Monthly School Magazine October",
      description:
        "Gandhi Jayanti and Lal Bahadur Shastri Jayanti,Dussehra Celebration,Chairman Sir's Birthday Celebration and more.",

      image: octImg,
      link: magzineOct,
    },
    {
      id: 9,
      title: "Monthly School Magazine November",
      description:
        "Karnataka Rajyotsava,Diwali Celebration,Bhagvad Gita Abhiyana and more.",
      image: novImg,
      link: magzineNov,
    },
    {
      id: 10,
      title: "Monthly School Magazine December",
      description:
        "School Sports Fest, Parents Sport Day ,Bhagvad Gita Competittion and more.",
      image: decImg,
      link: magzineDec,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-[200px] p-6 md:mt-5">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Our Publications</h1>
          <p className="text-gray-600 mt-2">
            Explore our school's latest magazines, newsletters, and research
            work.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={publication.image}
                  alt={publication.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {publication.title}
                </h2>
                <p className="text-gray-600 mt-2">{publication.description}</p>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-indigo-600 font-bold hover:text-indigo-800"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PublicationsPage;
