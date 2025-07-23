import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("contactFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xbjezrzn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        localStorage.removeItem("contactFormData");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch {
      alert("Network error. Try again.");
    }
  };

  return (
    <div>
      {submitted && (
        <Alert variant="success">
          ✅ Message sent successfully! We'll be in touch shortly.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Hey I'd like to connect to..."
              rows={3}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>
        <Button className="SubmitForm" type="submit">
          Get in touch
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
