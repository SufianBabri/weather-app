import React from 'react';
import Col from 'react-bootstrap/cjs/Col';
import Card from 'react-bootstrap/Card';
import logo from '../../assets/about-logo.svg'
import packageJson from '../../../package.json';

const About = () => {
	const appName = process.env.REACT_APP_NAME;
	const appVersion = packageJson.version;
	return (
		<Col className="m-4">
			<img src={logo} alt="Logo" width="100"/>
			<Card.Title className="card-title">{appName} (v{appVersion})</Card.Title>
			<Card.Text className="ml-4">Developed by Sufian Farouk Babri</Card.Text>
		</Col>
	);
};

export default About;