import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./StacksSection.css";
import LanguageIcon from "../../assets/langguage.svg";
import FrameworkIcon from "../../assets/framework.svg";
import SkillsIcon from "../../assets/skills.svg";

const StackCards = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* Languages Card */}
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="text-center d-flex flex-column justify-content-center StackCard">
            <div className="CardImageWrapper">
              <Card.Img variant="top" className="StackCardImage" src={LanguageIcon} />
            </div>
            <Card.Body>
              <Card.Title className="StackCardTitle">Languages</Card.Title>
              <Row className="justify-content-center g-2 mt-3">
                <Col xs="auto"><p className="StackText">JavaScript</p></Col>
                <Col xs="auto"><p className="StackText">Ruby</p></Col>
                <Col xs="auto"><p className="StackText">Python</p></Col>
                <Col xs="auto"><p className="StackText">HTML</p></Col>
                <Col xs="auto"><p className="StackText">CSS</p></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Frameworks Card */}
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="text-center d-flex flex-column justify-content-center StackCard">
            <div className="CardImageWrapper">
              <Card.Img variant="top" className="StackCardImage" src={FrameworkIcon} />
            </div>
            <Card.Body>
              <Card.Title className="StackCardTitle">Frameworks</Card.Title>
              <Row className="justify-content-center g-2 mt-3 ">
                <Col xs="auto"><p className="StackText">React.js</p></Col>
                <Col xs="auto"><p className="StackText">Ruby on Rails</p></Col>
                <Col xs="auto"><p className="StackText">RSpec</p></Col>
                <Col xs="auto"><p className="StackText">Capybara</p></Col>
                <Col xs="auto"><p className="StackText">Django</p></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Skills Card */}
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="text-center d-flex flex-column justify-content-center StackCard">
            <div className="CardImageWrapper">
              <Card.Img variant="top" className="StackCardImage" src={SkillsIcon} />
            </div>
            <Card.Body>
              <Card.Title className="StackCardTitle">Skills</Card.Title>
              <Row className="justify-content-center g-2 mt-3">
                <Col xs="auto"><p className="StackText">Database Management</p></Col>
                <Col xs="auto"><p className="StackText">Version Control</p></Col>
                <Col xs="auto"><p className="StackText">CLI</p></Col>
                <Col xs="auto"><p className="StackText">Web Development</p></Col>
                <Col xs="auto"><p className="StackText">API Design</p></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StackCards;
