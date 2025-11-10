
import newsletter from "../assets/publications/newsletter.JPG";
import magzineJan from "../assets/magzine/monthly magazine JAN.pdf";
import magzineFeb from "../assets/magzine/monthly magazine FEB.pdf";
import magzineMar from "../assets/magzine/monthly magazine MARCH.pdf";
import magzineJune from "../assets/magzine/monthly magazine (june).pdf";
import magzineJuly from "../assets/magzine/monthly magazine(july).pdf";
import magzineSept from "../assets/magzine/SEPTEMBER.pdf";
import magzineOct from "../assets/magzine/OCTOBER.pdf";
import magzineNov from "../assets/magzine/monthly magazine NOV.pdf";
import magzineDec from "../assets/magzine/monthly magazine DEC.pdf";

import annualDayImg from "../assets/magzine/annual_day.JPG";

import annualDayImg2023 from '../assets/studentlife/AnnualDay2023.JPG'
import juneImg from "../assets/magzine/june.JPG";
import julyImg from "../assets/magzine/july.JPG";
import septImg from "../assets/magzine/sept.JPG";
import octImg from "../assets/magzine/oct.JPG";
import novImg from "../assets/magzine/nov.JPG";
import decImg from "../assets/magzine/dec.JPG";
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
      image: septImg,
      link: magzineMar,
    },
    {
      id: 4,
      title: "Monthly School Magazine June",
      description:
        "School Reopen Day,World Environment Day,Father's Day, Yoga Day and more.",
      image: annualDayImg2023,
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
      title: "Monthly School Magazine September",
      description:
        "Teacher's Day,Ganesh Chaturthi Celebration,Parent - Teacher Meeting,Activity based lessons and more.",
      image:juneImg ,
      link: magzineSept,
    },
    {
      id: 7,
      title: "Monthly School Magazine October",
      description:
        "Gandhi Jayanti and Lal Bahadur Shastri Jayanti,Dussehra Celebration,Chairman Sir's Birthday Celebration and more.",

      image: octImg,
      link: magzineOct,
    },
    {
      id: 8,
      title: "Monthly School Magazine November",
      description:
        "Karnataka Rajyotsava,Diwali Celebration,Bhagvad Gita Abhiyana and more.",
      image: novImg,
      link: magzineNov,
    },
    {
      id: 8,
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
