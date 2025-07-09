import React from "react";
import Container from 'react-bootstrap/Container';
import "./ThirdSection.css";



const ThirdSection = () => {
  return (
    <Container fluid className="SectionThree">
     <h2 className="ThirdSectionTitle text-center">About me</h2>
     <p className="AboutText">
       I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded,<br /> don’t hesitate to contact me.
     </p>
     <div>
      <button className="ResumeButton">Get my resume</button>
     </div>
    </Container>
  )
};

export default ThirdSection;