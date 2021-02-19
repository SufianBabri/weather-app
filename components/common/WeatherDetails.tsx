import React from 'react';
import {Card} from 'react-bootstrap';
import * as WeatherParser from '../../services/weatherParser';
import {WeatherInfo} from '../../services/weatherParser';
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
					<Card.Subtitle>{WeatherParser.getReadableTime(weatherInfo)}</Card.Subtitle>
					<img src={WeatherParser.getIcon(weatherInfo)} />
					<Card.Title>{weatherInfo.temp} °C</Card.Title>
					<Card.Text>{weatherInfo.text}</Card.Text>
				</Card.Body>
			</Card>
		</Row>
	);
}
