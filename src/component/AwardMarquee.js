import React, { useState, useRef } from "react";
import image1 from "../assets/awards/DSC.JPG";
import image2 from "../assets/awards/DSC01617.JPG";
import image3 from "../assets/awards/dubaiaward.JPG";
import image4 from "../assets/awards/educationtoday.jpg";
import image5 from "../assets/awards/excellence.jpg";
import image6 from "../assets/awards/global2.jpg";
import image7 from "../assets/awards/globaltriumph.jpg";

const testimonials = [
  {
    name: "Rakshita",
    title: "(Virtual Relationship Manager)",
    image: image1,
    quote:
      "I am working as Virtual Relationship Manager in Goal Corporation for the last two years. I joined as a fresher and learnt a lot of customer relation skills. I am grateful to my superiors and the company for this opportunity to grow my skills and enhance my career.",
  },
  {
    name: "Santosh Naik",
    title: "(Sales Manager)",
    image: image2,
    quote:
      "I joined Goal Corporation as Jr. Sales Manager and have since been elevated to Sales Manager. I have improved my customer relation skills, communication, and personality after joining here. Being educated in a remote village, I was not able to communicate properly, but my seniors and managers taught me everything. Now, I feel proud to be part of this great company.",
  },
  {
    name: "Subray Naik",
    title: "(Customer Relation Manager)",
    image: image3,
    quote:
      "My journey with Goal is very long… I have been associated with the Company from the beginning, and today I am able to work independently and make the right decisions, all thanks to the employee engagement program of the Goal family.",
  },
  {
    name: "Balakrishna S",
    title: "(Sales/Legal Coordinator)",
    image: image4,
    quote:
      "I am associated with our MD right from the beginning of his journey in the financial sector. I take care of all Legal requirements - scrutiny of documents, filing, submission to Banks, etc. I have also grown along with the company. There are ample opportunities here for a beginner to shape up his career.",
  },
  {
    name: "Swati",
    title: "(Virtual Relationship Manager – Yelahanka branch)",
    image: image5,
    quote:
      "I am just eight months old with Goal Corp. I joined as a fresher, and the whole Goal family made me comfortable in my career journey. I sincerely thank the management for letting me be part of this wonderful company and giving me an opportunity to learn and grow in my career.",
  },
  // {
  //   name: "Prashant K",
  //   title: "(Sales Manager - Nagarbhavi branch)",
  //   image: image6,
  //   quote:
  //     "I joined as a fresher in Goal Corp in April 2022 and today I am functioning as Sales Manager. My seniors and the Goal management have provided every single opportunity to grow myself and shape up my career. I sincerely thank everyone for supporting me.",
  // },
  {
    name: "Joshna R",
    title: "(VRM - Hyderabad)",
    image: image7,
    quote:
      "I joined as VRM in the Hyderabad branch in April. Even though I had only short-term experience, the management has trusted me with this post, and now I am able to work independently. All credit goes to my superiors and the Goal family.",
  },
];

const AwardMarquee = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  return (
    // <section
    //   className="py-16 bg-gray-100"
    //   style={{
    //     backgroundImage: `url})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundAttachment: "fixed",
    //     opacity: "50",
    //   }}
    // >
    //   <div className="mx-auto px-6">
    //     <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-12">
    //       Award Images
    //     </h2>
    //     <div
    //       ref={sliderRef}
    //       className="overflow-hidden relative"
    //       onMouseEnter={() => setIsHovered(true)}
    //       onMouseLeave={() => setIsHovered(false)}
    //     >
    //       <div
    //         className={`flex gap-8 ${
    //           isHovered ? "animation-paused" : ""
    //         } flex-wrap md:flex-nowrap`}
    //         style={{
    //           animation: "slide 30s linear infinite",
    //           animationPlayState: window.innerWidth < 768 ? "paused" : "running", // Disable animation on mobile
    //         }}
    //       >
    //         {testimonials.concat(testimonials).map((testimonial, index) => (
    //           <div
    //             key={index}
    //             className="bg-white rounded-lg shadow-lg p-8 transform transition md:w-[400px] md:h-[350px] duration-500 ease-in-out"
    //             style={{
    //               flex: "0 0 auto",
    //               minWidth: "440px",
    //               maxWidth: "320px",
    //               height: "440px",
    //             }}
    //           >
    //             <div className="flex items-center mb-6">
    //               <img
    //                 className="w-96 h-96 rounded-full object-cover object-center border-1 border-black mr-4"
    //                 src={testimonial.image}
    //                 alt={testimonial.name}
    //               />
    //               <div>

    //               </div>
    //             </div>

    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   <style jsx>{`
    //     @keyframes slide {
    //       from {
    //         transform: translateX(0);
    //       }
    //       to {
    //         transform: translateX(-100%);
    //       }
    //     }
    //     .animation-paused {
    //       animation-play-state: paused !important;
    //     }
    //     @media (max-width: 768px) {
    //       div[style*="animation: slide"] {
    //         animation: none !important;
    //       }
    //     }
    //   `}</style>
    // </section>

<section
  className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 relative"
>
  <div className="max-w-full px-6">
    <h2 className="text-4xl font-bold text-center text-orange-600 mb-14 tracking-wide drop-shadow-md">
      🏆 Award Gallery
    </h2>
    <div
      ref={sliderRef}
      className="overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex gap-6 transition-transform ease-linear ${
          isHovered ? "animation-paused" : ""
        }`}
        style={{
          animation: "slide 25s linear infinite",
          animationPlayState:
            typeof window !== "undefined" && window.innerWidth < 768
              ? "paused"
              : "running",
        }}
      >
        {testimonials.concat(testimonials).map((testimonial, index) => (
         <div
         key={index}
         className="bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-6 w-[350px] min-w-[360px] h-[360px] flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)]"
       >
         <img
           className="w-96 h-96 rounded-lg object-cover object-center border border-white/30 shadow-md"
           src={testimonial.image}
           alt={testimonial.name}
         />
       </div>
       
        
        ))}
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes slide {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
    .animation-paused {
      animation-play-state: paused !important;
    }
    @media (max-width: 768px) {
      div[style*="animation: slide"] {
        animation: none !important;
      }
    }
  `}</style>
</section>

  );
};

export default AwardMarquee;
