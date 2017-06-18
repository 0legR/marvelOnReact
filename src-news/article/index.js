import React from 'react';
import ButtReadMore from '../button/index.js';

class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'none',
			visible: false,
			// rating: 0,
			// anotherState: 'bla-bla-bla'

		};

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState( prevState => ({
			visible: !prevState.visible
		}));
	}

	render() {
		let author = this.props.data.author,
			text = this.props.data.text,
			bigText = this.props.data.bigText,
			first = this.props.data.first,
			second = this.props.data.second,
			third = this.props.data.third,
			visible = this.state.visible;
		// console.log('render', this);
		return (
			<div className="article">
				<p className="news_author">{author}:</p>
				<p className="news_author">{first}</p>
				<p className="news_text">{text}</p>
				<p className="news_text">{second}</p>
				<div className='button' 
					onClick={this.handleClick}>
					{this.state.visible ? 
					<ButtReadMore name="Hide this..." bsStyle="info" bsSize="small" /> : 
					<ButtReadMore name="Read more..." bsStyle="success" bsSize="small" />}
				</div>
				<p className={'news_bigText'+(visible ? 'none' : '')}>{bigText}</p>
				<p className={'news_bigText'+(visible ? 'none' : '')}>{third}</p>
			</div>
		);
	}
}

export default Article;