import React from 'react';
import {Card} from 'react-bootstrap';
import {getIcon, getReadableTime, WeatherInfo} from '../../data/models/weatherInfo';
import Row from 'react-bootstrap/cjs/Row';

interface Props {
	weatherInfo: WeatherInfo;
}

export default function WeatherDetails({weatherInfo}: Props) {
	return (
		<Row className="mt-3 justify-content-center">
			<Card className="mt-3 text-center" style={{width: '18rem'}}>
				<Card.Body>
					<Card.Title>Today</Card.Title>
					<Card.Subtitle>{getReadableTime(weatherInfo)}</Card.Subtitle>
					<img src={getIcon(weatherInfo)} />
					<Card.Title>{weatherInfo.temp} °C</Card.Title>
					<Card.Text>{weatherInfo.text}</Card.Text>
				</Card.Body>
			</Card>
		</Row>
	);
}
