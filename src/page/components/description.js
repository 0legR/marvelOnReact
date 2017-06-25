import React, {Component} from 'react';

export default class Description extends Component {
	render() {
		let description = this.props.data.description;
		// console.log(description);
		if (description !== '') {
			return (
				<li className="col-sm-12">
					<div className="leftBox">Description =></div>
					<div className="rightBox">{description}</div>
				</li>
			);
		}else{
			return (<div>{undefined}</div>);
		}
	}
}