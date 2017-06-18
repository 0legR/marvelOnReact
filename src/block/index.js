import React from 'react';
import './index.css';

class Block extends React.Component {
	render() {
		let imgPath = this.props.data.thumbnail;
		return (
			<li className="col-sm-4 col-md-4 col-lg-4">
				<div className="block">
					<img src={imgPath.path+'.'+imgPath.extension} alt={this.props.data.name}/>
					<a href="#container">{this.props.data.name}</a>
					<h3>{this.props.data.id}</h3>
					<h4>{this.props.data.modified}</h4>
				</div>
			</li>
		);
	}
}

export default Block;
