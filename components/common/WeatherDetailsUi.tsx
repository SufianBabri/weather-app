import React from 'react';
import Image from 'next/image';
import {Card} from 'react-bootstrap';
import {getIcon, getReadableTime, WeatherInfo} from '../../data/models/weatherInfo';
import Row from 'react-bootstrap/cjs/Row';

interface Props {
	weatherInfo: WeatherInfo;
}

export default function WeatherDetailsUi({weatherInfo}: Props) {
	return (
		<Row className="mt-3 justify-content-center">
			<Card className="mt-3 text-center" style={{width: '18rem'}}>
				<Card.Body>
					<Card.Title>Today</Card.Title>
					<Card.Subtitle>{getReadableTime(weatherInfo)}</Card.Subtitle>
					<Image src={getIcon(weatherInfo)} width={100} height={100} />
					<Card.Title>{weatherInfo.temp} °C</Card.Title>
					<Card.Text>{weatherInfo.text}</Card.Text>
				</Card.Body>
			</Card>
		</Row>
	);
}
