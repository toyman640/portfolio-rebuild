import React from "react";
import "./BannerSection.css";
import LinkedinIcon from "../assets/linkedin-icon.svg";
import GithubIcon from "../assets/github.svg";
import AngelIcon from "../assets/angel.svg"

const BannerSection = () => {
  return (
    <div className="BannerSectionParent">
      <div className="BannerContainer">
        <p className="NameText">Hey there. I'm Toyosi.</p>
        <p className="IntroText">I'm a software developer</p>
        <p className="IntroInfo"> I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, <br /> don’t hesitate to contact me.</p>
        <ul className="SocialIcons">
          <li>
            <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer">
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <img src={GithubIcon} alt="GitHub" />
            </a>
          </li>
           <li>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <img src={AngelIcon} alt="Angel List" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default BannerSection;