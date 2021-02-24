export interface WeatherInfo {
	temp: number,
	text: string,
	icon: string,
	unixTime: number
}

export function parseResponse(data: any): WeatherInfo {
	return {
		temp: data.main.temp,
		text: data.weather[0].main,
		icon: data.weather[0].icon,
		unixTime: data.dt
	};
}

export function getReadableTime(weatherInfo: WeatherInfo) {
	return new Date(weatherInfo.unixTime * 1000).toLocaleTimeString();
}

export function getIconUrl(weatherInfo: WeatherInfo) {
	return `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
}