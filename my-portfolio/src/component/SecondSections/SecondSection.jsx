import React from "react";
import Container from 'react-bootstrap/Container';
import "./SecondSection.css";
import WorksCards from "./WorkCardsSS";



const SectionSection = () => {
  return (
     <Container>
      <div className="SecondSection">
        <h3 className="TitleTextSS">My Recent Works</h3>
        <WorksCards />

      </div>
    </Container>
  )
};

export default SectionSection;