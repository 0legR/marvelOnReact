import React, { Component } from 'react';

export default class HamburgerItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data
		};
	}

	render() {
		let data = this.state.data;
		return (
			<li className="overflowLi">
				<div className="hamItemLeftBox">{data.name} =></div>
				<div className="hamItemRightBox">
					<a href={data.resourceURI}
						target="_blank"
						rel="noopener noreferrer">
						Original resource at Marvel
					</a>
				</div>
				<div><hr /></div>
			</li>
				

		);
	}
}