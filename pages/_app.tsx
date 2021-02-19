import {AppProps} from 'next/app';
import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../components/common/NavBar';

function App({Component, pageProps}: AppProps) {
	library.add(fab, fas, far);
	return (
		<React.Fragment>
			<NavBar />
			<Component {...pageProps} />
			{/*<Switch>*/}
			{/*	<Route path="/home" component={Index} />*/}
			{/*	<Route path="/about" component={About} />*/}
			{/*	<Redirect from="/" to="/home" />*/}
			{/*	<Redirect to="/not-found" />*/}
			{/*</Switch>*/}
		</React.Fragment>
	);
}

export default App;
