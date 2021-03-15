import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';
import ReactDOM from 'react-dom';

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
      setValidated(true);
      setValidationState('my-invalid');
      e.stopPropagation();
    } else {
      console.log('valid and ready');
      setValidationState('my-valid');
      await fetch('/api/send_email', {
        method: 'POST',
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          Authorization: 'Bearer somecodehere',
        },
      }).then((response) => {
        if (response.ok) {
          setFormState({ name: '', email: '', message: '' });
          setValidationState('');
          ReactDOM.findDOMNode(form).reset();
          alert('Your message has been sent! I will get back to you soon.');
          return setValidated(false);
        }
      });
      console.log(formState);
    }
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
        Use the form below to send me an email message and I will get back to
        you shortly. You must include a name, email and message to submit. Make
        sure your email address is correct so that I can get in touch with you.
        You may also use on one of the blue links below to find me on GitHub,
        LinkedIn, or send me an email with your default email app.
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
            value={name}
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
            value={email}
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
            value={message}
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
