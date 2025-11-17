import React from "react";
import { motion } from "framer-motion";
import deepa from "../../assets/faculty/senior-faculty/deepag.JPG";
import swati from "../../assets/faculty/senior-faculty/swati.JPG";
import deepa2 from "../../assets/faculty/senior-faculty/deepak.JPG";
import Alisha from "../../assets/faculty/senior-faculty/alisha.JPG";
// import Vandana from "../../assets/faculty/senior-faculty/vandana.JPG";
import Akshita from "../../assets/faculty/senior-faculty/akshita.JPG";
import Swapnaja from "../../assets/faculty/senior-faculty/swapnaja.JPG";
import Shweta from "../../assets/faculty/senior-faculty/shweta.n.JPG";
import Shraddha from "../../assets/faculty/senior-faculty/shraddha.JPG";
import Savita from "../../assets/faculty/senior-faculty/savita.JPG";
import Rakshita from "../../assets/faculty/senior-faculty/rakshita.JPG";
import Priyanka from "../../assets/faculty/senior-faculty/priyanka.JPG";
import Pankaja from "../../assets/faculty/senior-faculty/pankaja.JPG";
import Divya from "../../assets/faculty/senior-faculty/divya.JPG";
import Sharon from "../../assets/faculty/senior-faculty/sheron.JPG";
import Poornima from "../../assets/faculty/senior-faculty/POORNIMA1.JPG";
import Pavitra from "../../assets/faculty/senior-faculty/pavitra.JPG";
import Pallavi from "../../assets/faculty/senior-faculty/pallavi.JPG";
import Megha from "../../assets/faculty/senior-faculty/meghana.JPG";
import Manjula from "../../assets/faculty/senior-faculty/manjula.JPG";
import Jayalaxmi from "../../assets/faculty/senior-faculty/jayalaxmi.JPG";
import Baby from "../../assets/faculty/senior-faculty/baby.JPG";
import Akshay from "../../assets/faculty/senior-faculty/akshay.1.JPG";
import Abhishek from "../../assets/faculty/senior-faculty/abhishek.JPG";
import Veena from "../../assets/faculty/senior-faculty/veena.JPG";
import Nivedita from "../../assets/faculty/senior-faculty/nivedita.1.JPG";
import Vanita from "../../assets/faculty/senior-faculty/vanita2.JPG";
import Prashant from "../../assets/faculty/senior-faculty/prashant.JPG";
import NIRMALA from "../../assets/juniorFaculty/2.png";
// import NIRMALA from "../../assets/juniorFaculty/2.png";
import PAVITRA from "../../assets/juniorFaculty/3.png";
import HARSHITA from "../../assets/juniorFaculty/4.png";
import DHANYA from "../../assets/juniorFaculty/5.png";
import VAISHNAV from "../../assets/juniorFaculty/6.png";
import SHIBILI from "../../assets/juniorFaculty/7.png";
import GOPIKA from "../../assets/juniorFaculty/8.png";
import BIBIYA from "../../assets/juniorFaculty/9.png";
import AGNES from "../../assets/juniorFaculty/10.png";
import SANKET from "../../assets/juniorFaculty/11.png";
import BHAVYA from "../../assets/juniorFaculty/12.png";
import NAMITA from "../../assets/juniorFaculty/13.png";

const facultyData = [
  { name: "Mrs. Baby Benjamin", photo: Baby, designation: "History Teacher" },
  { name: "Ms. Poornima Naik", photo: Poornima, designation: "Kannada Teacher" },
  { name: "Ms. Manjula Mesta", photo: Manjula, designation: "Maths Teacher" },
  { name: "Mr. Prashant Naik", photo: Prashant, designation: "P.E Teacher" },
  { name: "Ms. Vanita Kharvi", photo: Vanita, designation: "English Teacher" },
  { name: "Mrs. Priyanka Naik", photo: Priyanka, designation: "Maths Teacher" },
  { name: "Mrs. Savita Gouda", photo: Savita, designation: "Kannada Teacher" },
  { name: "Ms. Nivedita Bhomkar", photo: Nivedita, designation: "Maths Teacher" },
  { name: "Mrs. Veena Harikanta", photo: Veena, designation: "Geography Teacher" },
  { name: "Ms. Deepa Gouda", photo: deepa, designation: "Hindi Teacher" },
  { name: "Ms. Shweta Naik", photo: Shweta, designation: "Kannada Teacher" },
  { name: "Mrs. Rakshita Devadiga", photo: Rakshita, designation: "EVS Teacher" },
  { name: "Mrs. Megha Naik", photo: Megha, designation: "Physics Teacher" },
  { name: "Mrs. Deepa Kelsi", photo: deepa2, designation: "English Teacher" },
  { name: "Ms. Alisha Dias", photo: Alisha, designation: "Biology Teacher" },
  { name: "Mr. D Akshay", photo: Akshay, designation: "Computer Teacher" },
  { name: "Mrs. Jayalaxmi Nair", photo: Jayalaxmi, designation: "Hindi Teacher" },
  { name: "Ms. Sharon Lopes", photo: Sharon, designation: "Value Education Teacher" },
  { name: "Mrs. Pallavi Achari", photo: Pallavi, designation: "Chemistry Teacher" },
  { name: "Ms. Swati Naik", photo: swati, designation: "Kannada Teacher" },
  { name: "Ms. Divya Revankar", photo: Divya, designation: "Physics Teacher" },
  { name: "Mrs. Pankaja Naik", photo: Pankaja, designation: "Hindi Teacher" },
  { name: "Ms. Shraddha Moger", photo: Shraddha, designation: "Maths Teacher" },
  { name: "Ms. Pavitra Naik", photo: Pavitra, designation: "EVS Teacher" },
  // { name: "Ms. Vandana Fernandes", photo: Vandana, designation: "English Teacher" },
  { name: "Mr. Abhishek Kalas", photo: Abhishek, designation: "Physics Teacher" },
  { name: "Ms. Akshita Naik", photo: Akshita, designation: "EVS Teacher" },
  { name: "Mrs. Swapnaja Naik", photo: Swapnaja, designation: "Hindi Teacher" },
  { name: "Ms. Nirmala Fernandes", photo: NIRMALA, designation: "History Teacher" },
  //  { name: "Ms. Nirmala Fernandes", photo: NIRMALA, designation: "History Teacher" },
  { name: "Ms. Pavitra Rajeshwar Naik", photo: PAVITRA, designation: "Chemistry Teacher" },
  { name: "Ms. Harshita Halkar", photo: HARSHITA, designation: "History Teacher" },
  { name: "Ms. Dhanya Hareshwar Naik", photo: DHANYA, designation: "Biology Teacher" },
  { name: "Ms. M. V. Vaishnav", photo: VAISHNAV, designation: "Maths Teacher" },
  { name: "Mr. Shibili Farseen", photo: SHIBILI, designation: "Maths Teacher" },
  { name: "Ms. Gopika Krishnan T. V", photo: GOPIKA, designation: "English Teacher" },
  { name: "Ms. Bibiya Thomas", photo: BIBIYA, designation: "English Teacher" },
  { name: "Ms. Agnes Thomas", photo: AGNES, designation: "English Teacher" },
  { name: "Mr. Sanket Gaonkar", photo: SANKET, designation: "Maths Teacher" },
  { name: "Mrs. Bhavya S. Naik", photo: BHAVYA, designation: "Physics Teacher" },
  { name: "Mrs. Namita Narayana V A", photo: NAMITA, designation: "Hindi Teacher" },

];

const SeniorFaculty = () => {
  return (
    <div className="bg-yellow-50  py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Senior Faculty (Class 1 to 10)
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {facultyData.map((faculty, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="w-full h-60 object-top object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {faculty.name}
                </h3>
                <p className="text-sm text-gray-500">{faculty.designation}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SeniorFaculty;
