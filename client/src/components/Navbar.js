import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
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
						<nav className="text-center">
							{Auth.loggedIn() ? (
								<>
									<a href="/" onClick={logout}>
										Logout
									</a>
								</>
							) : (
								<>
									<div>
										<Nav.Link href="/Signup">Signup</Nav.Link>
										<Nav.Link href="/Login">Login</Nav.Link>
									</div>
								</>
							)}
						</nav>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
    </>
  )
  
};

export default AppNavbar;
