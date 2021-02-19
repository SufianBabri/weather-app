import * as React from 'react';
import {useState} from 'react';
import Row from 'react-bootstrap/cjs/Row';
import Container from 'react-bootstrap/cjs/Container';
import {SearchBox} from '../components/common/SearchBox';
import * as api from '../data/api';
import {ApiResponse} from '../data/api';
import LoadingUi from '../components/common/LoadingUi';
import WeatherDetails from '../components/common/WeatherDetails';
import ApiErrorUi from '../components/common/ApiErrorUi';

export default function HomePage() {
	const [searchQuery, setSearchQuery] = useState('');
	const [apiResponse, setApiResponse] = useState<ApiResponse>({status: 'idle'});

	function handleSearchChanged(query: string) {
		setSearchQuery(query);
	}

	async function handleSearchClicked() {
		setApiResponse({status: 'loading'});
		const response = await api.fetchWeather(searchQuery);
		setApiResponse(response);
	}

	const weatherInfo = apiResponse.data;
	const message = apiResponse.message;

	return (
		<Container className="my-3 align-content-center">
			<Row className="mt-3 justify-content-center">
				<SearchBox searchQuery={searchQuery} onChange={value => handleSearchChanged(value)}
						   onSubmit={handleSearchClicked}
						   placeholder="Search location..." width={50} />
			</Row>
			{apiResponse.status === 'success' && weatherInfo && <WeatherDetails weatherInfo={weatherInfo} />}
			{apiResponse.status === 'error' && message && <ApiErrorUi errorMessage={message} />}
			{apiResponse.status === 'loading' && <LoadingUi />}
		</Container>
	);
}