import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import ComputerLab from "../../component/facilities/ComputerLab";

const ComputerLabPage = () => {
  return (
    <div>
      <Navbar />
      <ComputerLab />
      <Footer />
    </div>
  );
};

export default ComputerLabPage;
