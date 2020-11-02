import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {Redirect, Route, Switch} from 'react-router-dom';
import {Home} from "./components/pages/Home";
import './App.css';
import NavBar from "./components/common/NavBar";
import About from "./components/pages/About";

function App() {
	library.add(fab, fas, far);
	return (
		<React.Fragment>
			<NavBar/>
			<Switch>
				<Route path="/home" component={Home}/>
				<Route path="/about" component={About}/>
				<Redirect from="/" to="/home"/>
				<Redirect to="/not-found"/>
			</Switch>
		</React.Fragment>
	);
}

export default App;
