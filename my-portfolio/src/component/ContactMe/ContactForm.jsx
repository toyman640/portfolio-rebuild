import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



const ContactForm = () => {
  return (
    <div>
      <Form>
        <Row>
          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Control  type="text" name="First Name" placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Control  type="text" name="First Name" placeholder="Last Name" />
          </Form.Group>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Control  type="email" name="First Name" placeholder="Email address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Example textarea</Form.Label> */}
            <Form.Control as="textarea" placeholder="Hey I'd like to connect to..." rows={3} />
          </Form.Group>

        </Row>
        <Button className="SubmitForm"  type="submit">
          Get in touch
        </Button>
      </Form>
    </div>
  )
};

export default ContactForm;