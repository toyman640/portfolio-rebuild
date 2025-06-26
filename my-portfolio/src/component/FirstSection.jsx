import React from "react";
import NavBar from "./NavBar";
import "./FirstSection.css";
import backgroundImage from "../assets/first-section-bg.svg";

const FirstSection = () => {
  return (
    <div className="FirstSection">
      <img src={backgroundImage} alt="Background" className="bg-img" />
      <div className="content">
        <NavBar />
      </div>
    </div>
  );
};

export default FirstSection;
