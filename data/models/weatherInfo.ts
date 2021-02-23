export interface WeatherInfo {
	temp: number,
	text: string,
	icon: string,
	unixTime: number
}

export function parse(obj: any): WeatherInfo {
	return {
		temp: obj.main.temp,
		text: obj.weather[0].main,
		icon: obj.weather[0].icon,
		unixTime: obj.dt
	};
}

export function getReadableTime(weatherInfo: WeatherInfo) {
	return new Date(weatherInfo.unixTime * 1000).toLocaleTimeString();
}

export function getIcon(weatherInfo: WeatherInfo) {
	return `http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
}