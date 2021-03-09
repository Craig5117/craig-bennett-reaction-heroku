import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation(props) {
  const { handlePageChange } = props;
  return (
    <Navbar className="navbar my-4 pb-3">
      <Nav className="flex-wrap justify-content-around">
        <Nav.Link
          href="#about"
          className="link-style"
          onClick={() => {
            handlePageChange('About');
          }}
        >
          About Me
        </Nav.Link>
        <Nav.Link
          href="#portfolio"
          className="link-style"
          onClick={() => {
            handlePageChange('Portfolio');
          }}
        >
          Portfolio
        </Nav.Link>
        <Nav.Link
          href="#contact"
          className="link-style"
          onClick={() => {
            handlePageChange('Contact');
          }}
        >
          Contact Me
        </Nav.Link>
        <Nav.Link
          href="#resume"
          className="link-style"
          onClick={() => {
            handlePageChange('Resume');
          }}
        >
          Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
