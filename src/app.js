import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Page from './page/index.js';
import NotFoundPage from './notFoundPage';

export default class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/page/:id" component={Page} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		);
	}
}