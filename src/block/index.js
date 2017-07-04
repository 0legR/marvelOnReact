import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


class Block extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		data: this.props.data,
	// 		fullData: this.props.fullData,
	// 		key: this.props.keyItem
	// 	};
	// }

	render() {
		let imgPath = this.props.data.thumbnail === undefined ? null : this.props.data.thumbnail,
			// key = this.state.key,
			pathname = `/page/${this.props.data.id}`;
			// console.log(pathname);
		let location = {
			pathname: pathname,
			state: {
				blockData: this.props.data
			}
		};
		return (
			<li className="col-sm-4 col-md-4 col-lg-4">
				<div className="block">
					<img src={imgPath === null ? '#' : imgPath.path+'.'+imgPath.extension}
						alt={this.props.data.name}/>
					<Link to={location} >{this.props.data.name}</Link>	
					<h3>{this.props.data.id}</h3>
					<h4>{this.props.data.modified}</h4>
				</div>
			</li>
		);
	}
}

export default Block;
