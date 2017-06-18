import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game/index';

class App extends React.Component {
	render() {
		return (
			<div className="main">
				<Game />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);