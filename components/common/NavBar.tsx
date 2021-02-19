import React from 'react';
import Navbar from 'react-bootstrap/cjs/Navbar';
import Nav from 'react-bootstrap/cjs/Nav';
import NavLink from './NavLink';
import {useRouter} from 'next/router';

export default function NavBar() {
	const appName = process.env.NEXT_PUBLIC_NAME;
	const {pathname} = useRouter();

	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand>{appName}</Navbar.Brand>
			<Nav className="mr-auto">
				<NavLink path="/" label="Home" pathname={pathname} />
				<NavLink path="/about" label="About" pathname={pathname} />
			</Nav>
		</Navbar>
	);
}
