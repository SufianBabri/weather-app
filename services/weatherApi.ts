import httpService from './httpService';
import * as WeatherParser from './weatherParser';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const endpoint = (city: string) => `weather?q=${city}&units=metric&appid=${apiKey}`;

export interface WeatherResponse {
	weatherInfo?: WeatherParser.WeatherInfo
	failureInfo?: FailureInfo
}

export interface FailureInfo {
	code: number,
	message: string
}

export async function fetchWeatherForCity(city: string): Promise<WeatherResponse> {
	try {
		const {data} = await httpService.get(endpoint(city));
		return {weatherInfo: WeatherParser.parse(data)};
	} catch (e) {
		return {
			failureInfo: {
				code: e.response.data.cod,
				message: e.response.data.message
			}
		};
	}
}