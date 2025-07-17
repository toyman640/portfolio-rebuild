import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "./FirstSection.css";
import backgroundImage from "../assets/first-section-bg.svg";
import backgroundImageMobile from "../assets/first-section-bg-mobile.svg";
import BannerSection from "./BannerSection";

const FirstSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="FirstSection">
      <NavBar />
      <BannerSection />

      {/* Show background below NavBar */}
      <div className="BackgroundSection">
        <img
          src={isMobile ? backgroundImageMobile : backgroundImage}
          alt="Background"
          className="bg-img"
        />
      </div>
    </div>
  );
};

export default FirstSection;
