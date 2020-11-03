import * as React from 'react';
import {useState} from 'react';
import Row from 'react-bootstrap/cjs/Row';
import Container from 'react-bootstrap/cjs/Container';
import {SearchBox} from '../common/SearchBox';
import * as WeatherApi from '../../services/weatherApi';
import {WeatherResponse} from '../../services/weatherApi';
import * as WeatherParser from '../../services/weatherParser';
import {Card} from 'react-bootstrap';

export function Home() {
	const [searchQuery, setSearchQuery] = useState('');
	const [weatherResponse, setWeatherResponse] = useState<WeatherResponse | undefined>(undefined);

	function handleSearchChanged(query: string) {
		setSearchQuery(query);
	}

	async function handleSearchClicked() {
		setWeatherResponse(undefined);
		const weatherInfo = await WeatherApi.fetchWeatherForCity(searchQuery);
		setWeatherResponse(weatherInfo);
	}

	const weatherInfo = weatherResponse?.weatherInfo;
	const failureInfo = weatherResponse?.failureInfo;

	return (
		<Container className="my-3 align-content-center">
			<Row className="mt-3 justify-content-center">
				<SearchBox searchQuery={searchQuery} onChange={value => handleSearchChanged(value)}
						   onSubmit={handleSearchClicked}
						   placeholder="Search location..." width={50} />
			</Row>
			{weatherInfo && (<Row className="mt-3 justify-content-center">
				<Card className="mt-3 text-center" style={{width: '18rem'}}>
					<Card.Body>
						<Card.Title>Today</Card.Title>
						<Card.Subtitle>{WeatherParser.getReadableTime(weatherInfo)}</Card.Subtitle>
						<img src={WeatherParser.getIcon(weatherInfo)} />
						<Card.Title>{weatherInfo.temp} °C</Card.Title>
						<Card.Text>{weatherInfo.text}</Card.Text>
					</Card.Body>
				</Card>
			</Row>)}
			{failureInfo && (<Row className="mt-3 justify-content-center text-danger font-weight-bold">Request
				failed: {failureInfo.message}</Row>)}
		</Container>
	);
}