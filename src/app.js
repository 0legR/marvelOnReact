import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Page from './page/index.js';
import NotFoundPage from './notFoundPage';
// import createBrowserHistory from 'history';

// const history = createBrowserHistory();
// const location = history.location;
// const unlisten = history.listen((location, action) => {
// 	console.log(action, location.pathname, location.state);
// });
// history.push('/', {some: 'state'});
// unlisten();

export default class App extends React.Component {
	

	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/page/:blockId" component={Page} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		);
	}
}