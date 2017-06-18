import Article from '../article/index.js';
import React from 'react';
// import PropTypes from 'prop-types';

export const my_news = [
	{
		author: 'bruce lee',
		text: 'Big Boss movie',
		bigText: 'A young man sworn to an oath of non-violence works with his cousins in an ice factory where they mysteriously begin to disappear.'
	},
	{
		author: 'al Pachino',
		text: 'devil`s advocate',
		bigText: 'An exceptionally adept Florida lawyer is offered a job to work in New York City for a high-end law firm with a high-end boss - the biggest opportunity of his career to date.'
	},
	{
		author: 'bruce willis',
		text: 'die hard',
		bigText: 'John McClane, officer of the NYPD, tries to save his wife Holly Gennaro and several others that were taken hostage by German terrorist Hans Gruber during a Christmas party at the Nakatomi Plaza in Los Angeles.'
	}
];

class News extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		counter: 0
	// 	};
	// 	this.handlerClick = this.handlerClick.bind(this);
	// }

	// handlerClick(e) {
	// 	this.setState({
	// 		counter: ++this.state.counter
	// 	});
	// }

	render() {
		let data = this.props.newsData;

		let newsTemplate = data.length ? data.map(function(item, index){
			return (
				<div key={index}>
					<Article data={item} />
				</div>
			);

		}) : (<p>Actually news are apsent!</p>);
		return (
			<div className="news">
				{newsTemplate}
				<strong onClick={this.handlerClick}>Total news => {data.length}</strong>
			</div>
		);
	}
}

// News.propTypes = {
// 	data: PropTypes.array.isRequired
// }

export default News;