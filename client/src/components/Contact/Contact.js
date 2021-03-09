import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;

  const [validationState, setValidationState] = useState('');

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false || !validateEmail(email)) {
      console.log('not valid');
      setValidationState('my-invalid');
      e.stopPropagation();
    } else {
      console.log('valid and ready');
      setValidationState('my-valid');
      // let res = await fetch('/', {
      //     body: JSON.stringify({
      //         name: formState.name,
      //         email: formState.email,
      //         message: formState.message
      //     }),
      //     headers: {
      //         Accept: "application/json, text/plain, */*",
      //         "Content-Type": "application/json",
      //         Authorization: 'Bearer somecodehere'
      //     },
      //     method: "POST",
      //     credentials: "include"
      //     })
      console.log(formState);
    }
    setValidated(true);
  };

  function handleChange(e) {
    if (validateEmail(email)) {
      setValidationState('my-valid');
    } else {
      setValidationState('my-invalid');
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  return (
    <section className="mb-5">
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">Contact Me</h3>
        </div>
      </div>
      <p className="contact-text">
        The back-end for the send message feature is not yet finished, but is
        expected to be ready soon. In the meantime, you may use on one of the
        blue links below to find me on GitHub, LinkedIn, or send me an email
        with your default email app.
      </p>
      <Form
        className="contact-form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={handleChange}
            defaultValue={name}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            className={validationState}
            onChange={handleChange}
            defaultValue={email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="messageTextarea">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            onChange={handleChange}
            defaultValue={message}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter the text of your message.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className="submit-button ml-3">
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default ContactForm;
