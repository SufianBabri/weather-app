import Link from 'next/link';
import Navbar from 'react-bootstrap/cjs/Navbar';
import Nav from 'react-bootstrap/cjs/Nav';

export default function NavBar() {
	const appName = process.env.NEXT_PUBLIC_NAME;

	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand>
				<img src="/logo-white.svg"
					 alt="logo"
					 width={30}
					 height={30}
					 className="d-inline-block align-top" />{' '}
				{appName}</Navbar.Brand>
			<Nav className="mr-auto">
				<Link href="/" passHref>
					<Nav.Link>
						Home
					</Nav.Link>
				</Link>
				<Link href="/about" passHref>
					<Nav.Link>
						About
					</Nav.Link>
				</Link>
			</Nav>
		</Navbar>
	);
}
