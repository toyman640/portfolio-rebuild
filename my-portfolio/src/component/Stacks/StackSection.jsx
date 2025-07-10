import React from "react";
import { Container } from "react-bootstrap";
import StackCards from "./StackCards";
import "./StacksSection.css";



const StackSection = () => {
  return (
    <Container className="StackContainer">
      <div className="">
        <StackCards />
      </div>
    </Container>
  )
};

export default StackSection;