import axios from 'axios';
import logger from './logService';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

axios.interceptors.response.use(response => response, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;

	if (!expectedError) {
		logger.log(error);
	}

	return Promise.reject(error);
});

function setJwt(jwt: string) {
	axios.defaults.headers.common['x-auth-token'] = jwt;
}

export default {
	get: axios.get,
	post: axios.post,
	delete: axios.delete,
	put: axios.put,
	setJwt,
};
