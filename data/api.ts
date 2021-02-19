import * as WeatherParser from '../services/weatherParser';
import {WeatherInfo} from '../services/weatherParser';

const BASE_API_URL = 'https://api.openweathermap.org/data/2.5/';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const getApiUrl = (city: string) => `${BASE_API_URL}weather?q=${city}&units=metric&appid=${apiKey}`;

export interface ApiResponse {
	status: 'loading' | 'error' | 'success' | 'idle',
	data?: WeatherInfo,
	message?: string
}

export async function fetchWeather(city: string): Promise<ApiResponse> {
	try {
		const response = await fetch(getApiUrl(city));
		const data = await response.json();

		if (!response.ok) return {status: 'error', message: data.message};

		return {status: 'success', data: WeatherParser.parse(data)};
	} catch (e) {
		console.error('Error occurred while making API request', e);

		return {
			status: 'error',
			message: `Unhandled error occurred - ${e}`
		};
	}
}