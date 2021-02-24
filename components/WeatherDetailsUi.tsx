import Image from 'next/image';
import Row from 'react-bootstrap/cjs/Row';
import Card from 'react-bootstrap/cjs/Card';
import {getIconUrl, getReadableTime, WeatherInfo} from '../data/models/weatherInfo';

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
					<Image src={getIconUrl(weatherInfo)} width={100} height={100} />
					<Card.Title>{weatherInfo.temp} °C</Card.Title>
					<Card.Text>{weatherInfo.text}</Card.Text>
				</Card.Body>
			</Card>
		</Row>
	);
}
