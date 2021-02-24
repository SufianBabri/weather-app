import React from 'react';
import Image from 'next/image';
import Col from 'react-bootstrap/cjs/Col';
import Card from 'react-bootstrap/Card';
import packageJson from '../package.json';

export default function AboutPage() {
	const appName = process.env.NEXT_PUBLIC_NAME;
	const appVersion = packageJson.version;
	return (
		<Col className="m-4">
			<Image src='/assets/about-logo.svg' alt="Logo" width={100} height={100} />
			<Card.Title className="card-title">{appName} v{appVersion}</Card.Title>
			<Card.Text>Developed by Sufian Babri</Card.Text>
		</Col>
	);
};