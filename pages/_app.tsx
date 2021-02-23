import {AppProps} from 'next/app';
import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../components/common/NavBar';

export default function App({Component, pageProps}: AppProps) {
	library.add(fas);
	return (
		<React.Fragment>
			<NavBar />
			<Component {...pageProps} />
		</React.Fragment>
	);
}
