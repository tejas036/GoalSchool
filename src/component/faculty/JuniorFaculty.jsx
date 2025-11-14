import React from "react";
import { motion } from "framer-motion";

// ----------- IMAGE IMPORTS (replace with correct image files) -----------
import VINAYA from "../../assets/juniorFaculty/1.png";
import NIRMALA from "../../assets/juniorFaculty/2.png";
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

// ---------------- FACULTY DATA (Final Sequence Correct) ----------------
const facultyData = [
  // Junior Faculty KG
  { name: "Ms. Vinaya Naik", photo: VINAYA, designation: "Computer Teacher (KG Section)" },

  // Senior Faculty Class 1 to 10
  { name: "Ms. Nirmala Fernandes", photo: NIRMALA, designation: "History Teacher" },
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

const JuniorFaculty = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Junior Faculty (Pre-Primary to Class 4)
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
              <div className="p-4 text-center">
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

export default JuniorFaculty;
