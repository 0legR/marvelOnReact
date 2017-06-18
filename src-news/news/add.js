import React from 'react';
import ReactDOM from 'react-dom';
import Butt from '../button/index';

class Add extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: "none",
		};
		this.handlerCheck = this.handlerCheck.bind(this);
		this.handlerClick = this.handlerClick.bind(this);
	}

	componentDidMount(){
		ReactDOM.findDOMNode(this.refs.authorAddInput).focus();
	}

	handlerClick(e) {
		// e.preventDefault();
		alert(
						ReactDOM.findDOMNode(this.refs.authorAddInput).value
						+"\n"+
						ReactDOM.findDOMNode(this.refs.newsAddInput).value
			);
	}

	handlerCheck(e) {
		// ReactDOM.findDOMNode(this.refs.alertButton).disabled = !e.target.checked;
		this.setState({
			display: !this.state.display
		});
	}

	render() {
		return (
			<form className="form">
				<input
					type="text"
					className="authorAddInput"
					placeholder="input your name"
					defaultValue=""
					ref="authorAddInput"
				/>
				<textarea
					className="newsAddInput"
					placeholder="input some news"
					defaultValue=""
					ref="newsAddInput"
					rows="2"
					cols="19"
				></textarea>
				<label className="checkboxAddInput">
					<input
						type="checkbox"
						defaultChecked={false}
						onChange={this.handlerCheck}
						ref="checkboxAddInput" />I agree with rules
				</label>
				<div className="alertButton" onClick={this.handlerClick} ref="alertButton">
					<Butt name="submit" bsSize="small" bsStyle="danger" disabled={this.state.display}/>
				</div>
			</form>
		);
	}
}

export default Add;