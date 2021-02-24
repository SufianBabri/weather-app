import * as React from 'react';
import {useState} from 'react';
import Row from 'react-bootstrap/cjs/Row';
import Container from 'react-bootstrap/cjs/Container';
import {SearchBox} from '../components/common/SearchBox';
import {ApiResponse, fetchWeather} from '../data/api';
import LoadingUi from '../components/common/LoadingUi';
import WeatherDetailsUi from '../components/common/WeatherDetailsUi';
import ApiErrorUi from '../components/common/ApiErrorUi';

export default function HomePage() {
	const [searchQuery, setSearchQuery] = useState('');
	const [apiResponse, setApiResponse] = useState<ApiResponse>({status: 'idle'});

	const handleSearchChanged = (query: string) => setSearchQuery(query);

	async function handleSearchClicked() {
		setApiResponse({status: 'loading'});
		const response = await fetchWeather(searchQuery);
		setApiResponse(response);
	}

	const weatherInfo = apiResponse.data;
	const message = apiResponse.message;

	return (
		<Container className="my-3 align-content-center">
			<Row className="mt-3 justify-content-center">
				<SearchBox searchQuery={searchQuery} onChange={value => handleSearchChanged(value)}
						   onSubmit={handleSearchClicked}
						   placeholder="Search for a city..." />
			</Row>
			{apiResponse.status === 'success' && weatherInfo && <WeatherDetailsUi weatherInfo={weatherInfo} />}
			{apiResponse.status === 'error' && message && <ApiErrorUi errorMessage={message} />}
			{apiResponse.status === 'loading' && <LoadingUi />}
		</Container>
	);
}