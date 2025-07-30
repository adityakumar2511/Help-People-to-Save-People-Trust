// src/pages/Home.jsx

import React, { useState } from "react";
import BannerSection from "./Main Page/BannerSection";
import FounderSection from "./Main Page/FounderSection";
import CounterSection from "./Main Page/CounterSection";
import SolvedCasesSection from "./Main Page/SolvedCases";
import OurServices from "./Main Page/OurServices";
import OurTeam from "./Main Page/OurTeam";
import FormSection from "./Main Page/FormSection";

// Case images
import case1 from "../assets/case1.jpeg";
import case2 from "../assets/case2.jpeg";
import case3 from "../assets/case3.jpeg";
import case4 from "../assets/case4.jpeg";
import case5 from "../assets/case5.jpeg";
import case6 from "../assets/case6.jpeg";

const Home = () => {
  const images = [case1, case2, case3, case4, case5];
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const stats = [
    {
      icon: "faCodeBranch",
      value: 2,
      suffix: "+",
      label: "Branches",
    },
    {
      icon: "faUsers",
      value: 10000,
      suffix: "+",
      label: "Members",
    },
    {
      icon: "faUserShield",
      value: 4,
      suffix: "+",
      label: "Committees",
    },
    {
      icon: "faCheckCircle",
      value: 500,
      suffix: "+",
      label: "Solved Cases",
    },
  ];

  return (
    <>
      <BannerSection />
      <FounderSection />
      <CounterSection stats={stats} />
      <OurServices />
      <SolvedCasesSection
        images={images}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      <FormSection/>
      <OurTeam/>
      
      
    </>
  );
};

export default Home;
