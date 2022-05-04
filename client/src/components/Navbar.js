import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, NavDropdown } from 'react-bootstrap';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  // set modal display state
  return (
    <>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Coast2Coast</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/Signup">Signup</Nav.Link>
        <Nav.Link href="/Login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
  
};

export default AppNavbar;
