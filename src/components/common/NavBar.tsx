import React from 'react';
import Navbar from 'react-bootstrap/cjs/Navbar';
import Nav from 'react-bootstrap/cjs/Nav';
import {LinkContainer} from 'react-router-bootstrap';

function NavBar() {
	const appName = process.env.REACT_APP_NAME;
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand>{appName}</Navbar.Brand>
			<Nav className="mr-auto">
				<LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
				<LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
			</Nav>
		</Navbar>
	);
}

export default NavBar;