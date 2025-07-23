import React from "react";
import LinkedinIcon from "../../assets/linkedin-icon.svg";
import GithubIcon from "../../assets/github.svg";
import AngelIcon from "../../assets/angel.svg";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="pt-5">
      <hr />
      <ul className="FooterIcons">
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
          </a>.
        </li>
      </ul>
    </div>
  )
};

export default Footer;