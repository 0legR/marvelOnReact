import React from 'react';
import ReactDOM from 'react-dom';
import Butt from '../button/index';

class TestINput extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	// value: 'input value'
		// };
		// this.handlerChange = this.handlerChange.bind(this);
		this.handlerClick = this.handlerClick.bind(this);
	}

	//this method makes input active when page is loaded
	componentDidMount() {//set focus into the our input 
		ReactDOM.findDOMNode(this.refs.myTestInput).focus();
	}

	// handlerChange(e) {
	// 	this.setState({
	// 		value: e.target.value
	// 	});
	// }

	handlerClick() {
		// alert(this.state.value);
		// console.log(this.refs);
		alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
	}

	render() {
		return (
			<div className="testINput">
		{/*this input working with handlerChange*/}
{/*				<input className="testInput"
						{onChange={this.handlerChange}}
						value={this.state.value} />*/}

					{/*this input working without handlerChange*/}
				<input className="testInput"
						defaultValue=""
						ref="myTestInput"
						/>
				<div className="button" onClick={this.handlerClick} ref="submit_button">
					<Butt name="submit" bsSize="small" bsStyle="warning" />
				</div>
			</div>
		);
	}
}

export default TestINput;