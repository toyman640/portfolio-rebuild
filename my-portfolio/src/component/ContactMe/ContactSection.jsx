import React from "react";
import { Container } from "react-bootstrap";
import ContactText from "./ContactText";
import ContactForm from "./ContactForm";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <Container fluid className="AllCover">
      <Container className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 text-center pb-5 mb-5 ">

        <div className="w-100 w-md-20">
          <ContactText />
        </div>
        <div className="w-100 w-md-80">
          <ContactForm />
        </div>
      </Container>
    </Container>
  )
};

export default ContactSection;