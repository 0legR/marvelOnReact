import React from 'react';
import But from '../button/index';
import ReactDOM from 'react-dom';
import {ee} from '../listener';

class Add extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			authorIsEmpty: true,
			newsIsEmpty: true,
			checkboxAddInput: true
		};

		// this.handlerCheckAuthor = this.handlerCheckAuthor.bind(this);
		// this.handlerCheckNews = this.handlerCheckNews.bind(this);
		this.handlerCheck = this.handlerCheck.bind(this);
		this.handlerClick = this.handlerClick.bind(this);
		this.handlerCheckbox = this.handlerCheckbox.bind(this);
	}

	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.authorAddInput).focus();
	}

	handlerCheck(stateItem, e) {
		if (e.target.value.trim().leght > 0) {
			this.setState({
				[''+stateItem]: true
			});
		}else{
			this.setState({
				[''+stateItem]: false
			});
		};
	}

	// handlerCheckAuthor(e) {
	// 	if (e.target.value.trim().lenght > 0) {
	// 		this.setState({
	// 			authorIsEmpty: true 
	// 		});
	// 	}else{
	// 		this.setState({
	// 			authorIsEmpty: false
	// 		});
	// 	};
	// }

	// handlerCheckNews(e) {
	// 	if (e.target.value.trim().lenght > 0) {
	// 		this.setState({
	// 			newsIsEmpty: true
	// 		});
	// 	}else{
	// 		this.setState({
	// 			newsIsEmpty: false
	// 		});
	// 	};
	// }

	handlerCheckbox() {
		this.setState({
			checkboxAddInput: !this.state.checkboxAddInput
		});
	}

	handlerClick() {
		let textEl = ReactDOM.findDOMNode(this.refs.newsAddInput);

		let author = ReactDOM.findDOMNode(this.refs.authorAddInput).value,
			text = textEl.value;

		let item = [{
			author: author,
			text: text,
			bigText: '....'
		}];

		ee.emit('News.add', item);

		textEl.value = '';
		this.setState({
			newsIsEmpty: true
		});
		alert(
			ReactDOM.findDOMNode(this.refs.authorAddInput).value
				+"\n"+
				ReactDOM.findDOMNode(this.refs.newsAddInput).value
		);
	}

	render() {
		let checkboxAddInput = this.state.checkboxAddInput,
			newsIsEmpty = this.state.newsIsEmpty,
			authorIsEmpty = this.state.authorIsEmpty;

		return (
			<form>
				<input
					type="text"
					className="authorAddInput"
					placeholder="Input your name"
					defaultValue=""
					ref="authorAddInput"
					onChange={this.handlerCheck.bind(this, 'authorIsEmpty')}
				/>
				<textarea
					className="newsAddInput"
					placeholder="input some news here"
					defaultValue=""
					ref="newsAddInput"
					rows="2"
					cols="19"
					onChange={this.handlerCheck.bind(this, 'newsIsEmpty')}
				></textarea>
				<label className="checkboxAddInput">
					<input 
						type="checkbox"
						defaultValue=""
						onChange={this.handlerCheckbox}
						ref="checkboxAddInput"
					/>I agree with rules
				</label>
				<div className="alertButton" onClick={this.handlerClick} ref="alertButton">
					<But
						name="submit"
						bsSize="small"
						bsStyle="danger"
						disabled = {checkboxAddInput || newsIsEmpty || authorIsEmpty}
					/>
				</div>
			</form>
		);
	}
}

export default Add;