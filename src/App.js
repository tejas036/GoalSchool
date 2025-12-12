import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./component/loader/Loader";
import Home from "./pages/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import About from "./pages/about/About";
import Motto from "./pages/about/Motto";
import VissionMission from "./pages/about/VissionMission";
import Principlemsg from "./pages/about/Principlemsg";
import History from "./pages/about/History";
import EnquiryPage from "./pages/EnquiryPage";
import AdmissionProgramsPage from "./pages/AdmissionProgramsPage";
import GalleryPage from "./pages/resourcepages/GalleryPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import ModernClassroomsPage from "./pages/Facilities/ModernClassroomsPage";
import KnowledgeCenterPage from "./pages/Facilities/KnowledgeCenterPage";
import CounselingServicesPage from "./pages/Facilities/CounselingServicesPage";
import PublicationsPage from "./component/PublicationsPage";
import ContactUs from "./component/ContactUs";
import AlumniPage from "./pages/AlumniPage";
import StudentLifePage from "./pages/StudentLifePage";
import BlogPage from "./component/Blogs";
import ProfilePage from "./pages/ProfilePage";
import FacultyPage from "./pages/FacultyPage";
import CafeteriaPage from "./pages/Facilities/CafeteriaPage";
import TransportationPage from "./pages/Facilities/TransportationPage";
import SecurityPage from "./pages/Facilities/SecurityPage";
import TechnologyPage from "./pages/Facilities/TechnologyPage";
import DayCareCenterPage from "./pages/Facilities/DayCareCenterPage";
import Curriculum from "./pages/FeatureSection/Curriculum";
import PersonalizedLearningExperience from "./assets/members/PersonalizedLearningExperience";
import QualityEducation from "./assets/members/QualityEducation";
import MedicarePage from "./pages/Facilities/Medicare";
import SportsComplexPage from "./pages/Facilities/SportsComplexPage";
import ArtMusicRoomsPage from "./pages/Facilities/ArtMusicRoomsPage";
import PhysicsLabPage from "./pages/Facilities/Physicslabpage";
import ChemistryLabPage from "./pages/Facilities/ChemistryLabPage";
import BiologyLabPage from "./pages/Facilities/BiologyLabPage";
import ComputerLabPage from "./pages/Facilities/ComputerLabPage";
import StemEducationPage from "./component/Blog/StemEducationPage";


// Custom hook to scroll to the top on route change
const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader when the route changes
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Adjust timeout as needed
    return () => clearTimeout(timeout);
  }, [location]);

  // Scroll to top on route change
  useScrollToTop();

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/+919916907216`; // Add your WhatsApp number here
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="App">
      {loading && <Loader />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featureSection/IcseCurriculum" element={<Curriculum />} />
        <Route
          path="/featureSection/personalized-learning"
          element={<PersonalizedLearningExperience />}
        />
        <Route
          path="/featureSection/quality-education"
          element={<QualityEducation />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/motto" element={<Motto />} />
        <Route path="/visionmission" element={<VissionMission />} />
        <Route path="/principlemessage" element={<Principlemsg />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/student-life" element={<StudentLifePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/stem-education" element={<StemEducationPage />} />

        <Route path="/admissionprograms" element={<AdmissionProgramsPage />} />
        <Route path="/facilities" element={<FacilitiesPage />}></Route>
        <Route path="/facilities/chemistry-lab" element={<ChemistryLabPage />} />
        <Route path="/facilities/computer-lab" element={<ComputerLabPage />} />

<Route path="/facilities/biology-lab" element={<BiologyLabPage />} />

        {/* <Route path="/facilities" element={<CafeteriaPage />}></Route> */}
        <Route
          path="/facilities/modernclassroom"
          element={<ModernClassroomsPage />}
        />
        <Route
          path="/facilities/knowledgecenter"
          element={<KnowledgeCenterPage />}
        />
        <Route
          path="/facilities/CounselingServices"
          element={<CounselingServicesPage />}
        />
        <Route path="/facilities/cafeteria" element={<CafeteriaPage />} />
        <Route
          path="/facilities/transportation"
          element={<TransportationPage />}
        />
        <Route path="/facilities/security" element={<SecurityPage />} />
        <Route path="/facilities/technology" element={<TechnologyPage />} />
        <Route
          path="/facilities/day-care-center"
          element={<DayCareCenterPage />}
        />
        <Route path="/facilities/art-music-rooms" element={<ArtMusicRoomsPage />} />
        <Route path="/facilities/medicare" element={<MedicarePage />} />

        <Route path="/facilities/sports-complex" element={<SportsComplexPage />} />
        <Route path="/facilities/physics-lab" element={<PhysicsLabPage />} />
        
          {/* <Route path="/facilities/" element={<PhysicsLabPage />} /> */}

      </Routes>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-8 right-8 z-50">
        <FontAwesomeIcon
          icon={faWhatsapp}
          size="3x"
          className="text-green-500 cursor-pointer hover:scale-110 transition-transform"
          onClick={handleWhatsAppClick}
        />
      </div>
    </div>
  );
}

export default App;
