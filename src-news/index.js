import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import News, {my_news} from './news/index.js';
import Comments, {my_comments} from './comments/index.js';
import TestInput from './news/testInput';
// import Add from './news/add';
import Add from './news/addState';
import GetRequest from './marvelSearch/index';
// import {ee} from './listener';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news: my_news
		};
	}

	componentDidMount() {
		// var self = this;
		// window.ee.addListener('News.add', function(item) {
		// 	var nextNews = item.concat(self.state.news);
		// 	self.setState({
		// 		news: nextNews
		// 	});
		// });
	}

	componentWillMount() {
		// window.ee.removeListener('News.add');
	}

	render() {
		return (
			<div className="app">
				<h3>? N E W S !</h3>
				<TestInput value="this.props" />
				<Add />
				<News newsData={this.state.news} />
				<Comments commentsData={my_comments} />
				<GetRequest />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);