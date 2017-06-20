import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


class Block extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data
		};
	}

	render() {
		let imgPath = this.state.data.thumbnail;
		let location = {
			pathname: '/page',
			state: {data: this.state.data}
		};
		return (
			<li className="col-sm-4 col-md-4 col-lg-4">
				<div className="block">
					<img src={imgPath.path+'.'+imgPath.extension} alt={this.state.data.name}/>
					<Link to={location} >{this.state.data.name}</Link>	
					<h3>{this.state.data.id}</h3>
					<h4>{this.state.data.modified}</h4>
				</div>
			</li>
		);
	}
}

export default Block;
