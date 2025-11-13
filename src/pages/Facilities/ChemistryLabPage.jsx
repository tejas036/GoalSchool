import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import ChemistryLab from "../../component/facilities/ChemistryLab";

const ChemistryLabPage = () => {
  return (
    <div>
      <Navbar />
      <ChemistryLab />
      <Footer />
    </div>
  );
};

export default ChemistryLabPage;
