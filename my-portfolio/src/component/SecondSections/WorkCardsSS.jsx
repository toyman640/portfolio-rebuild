import React, { useState } from "react";
import { Row, Col, Card, Container, Modal, Button } from "react-bootstrap";
import SkaalHubCard from "../../assets/skaal-card.png";
import MyunicampCard from "../../assets/myunicamp-card.png";
import SeamlessCard from "../../assets/seamless-card.png";
import SkaalMeatCard from "../../assets/skaal-meat-card.png";
import "./WorkCardSS.css";
import { motion } from "framer-motion";

const WorksCards = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    image: "",
    title: "",
    techs: [],
    description: "",
    liveLink: "",
    githubLink: ""
  });

  const handleShow = (title, description, techs, image, liveLink, githubLink) => {
    setModalData({ title, description, techs, image, liveLink, githubLink });
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container className="my-4">
      <Row>
        {/* Card 1 */}
        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="StackCards">
            <Card.Img variant="top" src={SkaalHubCard} className="CardImage" />
            <Card.Body className="d-flex flex-column flex-grow-1">
              <Card.Title className="text-center CardTitle">Skaal Hub</Card.Title>
              <Card.Text className="flex-grow-1">
                <Row className="g-2 mb-2">
                  <Col xs={6} lg={3} sm="auto"><button className="StackButton w-100">HTML</button></Col>
                  <Col xs={6} lg={2} sm="auto"><button className="StackButton w-100">CSS</button></Col>
                  <Col xs={6} lg={4} sm="auto"><button className="StackButton w-100">JAVASCRIPT</button></Col>
                  <Col xs={6} lg={3} sm="auto"><button className="StackButton w-100">DJANGO</button></Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="CardFooter">
              <div className="text-center">
                {/* <button
                  className="ProjectDetails"
                  onClick={() =>
                    handleShow(
                      "Skaal Meat",
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
                      ["HTML", "CSS", "JavaScript", "Django", "MYSQL"],  SkaalHubCard, "https://live-skaalmeat.com", "https://github.com/user/skaalmeat"
                    )
                  }
                >
                  See project
                </button> */}
                <motion.button
                  className="ProjectDetails"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring" }}
                  onClick={() =>
                    handleShow(
                      "Skaal Meat",
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
                      ["HTML", "CSS", "JavaScript", "Django", "MYSQL"],
                      SkaalHubCard,
                      "https://live-skaalmeat.com",
                      "https://github.com/user/skaalmeat"
                    )
                  }
                >
                  See project
                </motion.button>

                
              </div>
            </Card.Footer>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="StackCards">
            <Card.Img variant="top" src={SkaalMeatCard} className="CardImage" />
            <Card.Body className="d-flex flex-column flex-grow-1">
              <Card.Title className="text-center CardTitle">Skaal Meat</Card.Title>
              <Card.Text className="flex-grow-1">
                <Row className="g-2 mb-2">
                  <Col xs={6} lg={3} sm="auto"><button className="StackButton w-100">HTML</button></Col>
                  <Col xs={6} lg={2} sm="auto"><button className="StackButton w-100">CSS</button></Col>
                  <Col xs={6} lg={4} sm="auto"><button className="StackButton w-100">JAVASCRIPT</button></Col>
                  <Col xs={6} lg={3} sm="auto"><button className="StackButton w-100">DJANGO</button></Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="CardFooter">
              <div className="text-center">
                <button
                  className="ProjectDetails"
                  onClick={() =>
                    handleShow(
                      "Skaal Meat",
                      "A meat ordering and logistics platform for butchers and retailers.",
                      ["HTML", "CSS", "JavaScript", "Django"], SkaalMeatCard, "https://live-skaalmeat.com", "https://github.com/user/skaalmeat"
                    )
                  }
                >
                  See project
                </button>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="StackCards">
            <Card.Img variant="top" src={MyunicampCard} className="CardImage" />
            <Card.Body className="d-flex flex-column flex-grow-1">
              <Card.Title className="text-center CardTitle">Myunicamp</Card.Title>
              <Card.Text className="flex-grow-1">
                <Row className="g-2 mb-2">
                  <Col xs={6} lg={3} sm="auto"><button className="StackButton w-100">HTML</button></Col>
                  <Col xs={6} lg={2} sm="auto"><button className="StackButton w-100">CSS</button></Col>
                  <Col xs={6} lg={4} sm="auto"><button className="StackButton w-100">JAVASCRIPT</button></Col>
                  <Col xs={6} lg={3} sm="auto"><button className="StackButton w-100">DJANGO</button></Col>
                </Row>
                <Row className="g-2">
                  <Col xs={6} sm="auto"><button className="StackButton w-100">DJANGO REST</button></Col>
                  <Col xs={6} sm="auto"><button className="StackButton w-100">REACT</button></Col>
                  <Col xs={6} sm="auto"><button className="StackButton w-100">REDUX</button></Col>
                  <Col xs={6} sm="auto"><button className="StackButton w-100">POSTGRESQL</button></Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="CardFooter">
              <div className="text-center">
                <button
                  className="ProjectDetails"
                  onClick={() =>
                    handleShow(
                      "Myunicamp",
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
                      ["HTML", "CSS", "JavaScript", "Django", "DRF", "PostgreSQL"],  MyunicampCard, "https://live-skaalmeat.com", "https://github.com/user/skaalmeat"
                    )
                  }
                >
                  See project
                </button>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col xs={12} md={6} lg={6} className="mb-4">
          <Card className="StackCards">
            <Card.Img variant="top" src={SeamlessCard} className="CardImage" />
            <Card.Body className="d-flex flex-column flex-grow-1">
              <Card.Title className="text-center CardTitle">Seamless</Card.Title>
              <Card.Text className="flex-grow-1">
                <Row className="g-2 mb-2">
                  <Col xs={6} lg={3} sm="auto"><button className="StackButton w-100">REACT</button></Col>
                  <Col xs={6} lg={3} sm="auto"><button className="StackButton w-100">REDUX</button></Col>
                  <Col xs={6} lg={3} sm="auto"><button className="StackButton w-100">TAILWIND</button></Col>
                  <Col xs={6} lg={3} sm="auto"><button className="StackButton w-100">CSS</button></Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="CardFooter">
              <div className="text-center">
                <button
                  className="ProjectDetails"
                  onClick={() =>
                    handleShow(
                      "Seamless Constructions",
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
                      ["React", "Redux", "Tailwind", "CSS", "Github"],  SeamlessCard, "https://live-skaalmeat.com", "https://github.com/user/skaalmeat"
                    )
                  }
                >
                  See project
                </button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          {/* <Modal.Title>{modalData.title}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <img src={modalData.image} className="img-fluid" alt={modalData.title} srcset="" />
          <div className="d-flex justify-content-between p-2">
            <Modal.Title className="ModalTitle">{modalData.title}</Modal.Title>
            <div className="d-flex gap-2">
              <button className="ModalButton">See live</button>
              <button className="ModalButton">See source</button>
            </div>
          </div>
          <div className="d-flex flex-wrap gap-2 py-3">
            {modalData.techs.map((tech, index) => (
              <span key={index} className="StackButton">{tech}</span>
            ))}
          </div>
          <p>{modalData.description}</p>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </Container>
  );
};

export default WorksCards;
