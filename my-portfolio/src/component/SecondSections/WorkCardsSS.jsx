import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import WorkImage from "../../assets/works-1.svg";
import "./WorkCardSS.css";

const WorksCards = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="StackCards">
            <Card.Img variant="top" src={WorkImage} />
            <Card.Body>
              <Card.Title className="text-center CardTitle">Skaal Hub</Card.Title>
              <Card.Text>
                <Row className="g-2 mb-2">
                  <Col xs={6} lg={3} sm="auto">
                    <button className="StackButton w-100">HTML</button>
                  </Col>
                  <Col xs={6} lg={2} sm="auto">
                    <button className="StackButton w-100">CSS</button>
                  </Col>
                  <Col xs={6} lg={4} sm="auto">
                    <button className="StackButton w-100">JAVASCRIPT</button>
                  </Col>
                  <Col xs={6} lg={3} sm="auto">
                    <button className="StackButton w-100">DJANGO</button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <div className="text-center">
                <button className="ProjectDetails">See project</button>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="StackCards">
            <Card.Img variant="top" src={WorkImage} />
            <Card.Body>
              <Card.Title className="text-center CardTitle">Skaal Meat</Card.Title>
              <Card.Text>
                <Row className="g-2 mb-2">
                  <Col xs={6} lg={3} sm="auto">
                    <button className="StackButton w-100">HTML</button>
                  </Col>
                  <Col xs={6} lg={2} sm="auto">
                    <button className="StackButton w-100">CSS</button>
                  </Col>
                  <Col xs={6} lg={4} sm="auto">
                    <button className="StackButton w-100">JAVASCRIPT</button>
                  </Col>
                  <Col xs={6} lg={3} sm="auto">
                    <button className="StackButton w-100">DJANGO</button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <div className="text-center">
                <button className="ProjectDetails">See project</button>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="StackCards">
            <Card.Img variant="top" src={WorkImage} />
            <Card.Body>
              <Card.Title className="text-center CardTitle">Myunicamp</Card.Title>
              <Card.Text>
                <Row className="g-2 mb-2">
                  <Col xs={6} lg={3} sm="auto">
                    <button className="StackButton w-100">HTML</button>
                  </Col>
                  <Col xs={6} lg={2} sm="auto">
                    <button className="StackButton w-100">CSS</button>
                  </Col>
                  <Col xs={6} lg={4} sm="auto">
                    <button className="StackButton w-100">JAVASCRIPT</button>
                  </Col>
                  <Col xs={6} lg={3} sm="auto">
                    <button className="StackButton w-100">DJANGO</button>
                  </Col>
                </Row>
                <Row className="g-2">
                  <Col xs={6} sm="auto">
                    <button className="StackButton w-100">DJANGO REST</button>
                  </Col>
                  <Col xs={6} sm="auto">
                    <button className="StackButton w-100">REACT</button>
                  </Col>
                  <Col xs={6} sm="auto">
                    <button className="StackButton w-100">REDUX</button>
                  </Col>
                  <Col xs={6} sm="auto">
                    <button className="StackButton w-100">POSTGRESQL</button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <div className="text-center">
                <button className="ProjectDetails">See project</button>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="StackCards">
            <Card.Img variant="top" src={WorkImage} />
            <Card.Body>
              <Card.Title className="text-center CardTitle">Seamless</Card.Title>
              <Card.Text>
                <Row className="g-2 mb-2">
                  <Col xs={6} lg={3} sm="auto">
                    <button className="StackButton w-100">REACT</button>
                  </Col>
                  <Col xs={6} lg={3} sm="auto">
                    <button className="StackButton w-100">REDUX</button>
                  </Col>
                  <Col xs={6} lg={3} sm="auto">
                    <button className="StackButton w-100">TAILWIND</button>
                  </Col>
                  <Col xs={6} lg={3} sm="auto">
                    <button className="StackButton w-100">CSS</button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <div className="text-center">
                <button className="ProjectDetails">See project</button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WorksCards;
