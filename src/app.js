import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Page from './page/index.js';



export default class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/page" component={Page} />
			</Switch>
		);
	}
}