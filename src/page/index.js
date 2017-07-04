import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import DropUp, {HEADER, FOOTER} from '../head_foot/index';
import { Link } from 'react-router-dom';
import Block from '../block';
import './index.css';
import Hamburger from './components/humburger';
import Description from './components/description';

class Page extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		data: this.props.location.state.data,
	// 		fullData: this.props.location.state.fullData
	// 	};
	// 	this.store = this.store.bind(this);
	// }

	// store() {
	// 	const FullData = this.state.fullData;
	// 	return FullData;
	// }
	componentDidUpdate = () => { ReactDOM.findDOMNode(this).scrollIntoView(); }

	render() {
		let imgPath = this.props.location.state.blockData.thumbnail;
		let data = this.props.location.state.blockData;
		// let location = {
		// 	pathname: '/',
		// 	returnedData: {data: this.state.fullData}
		// };
		// let store = this.store;

// console.log(this.state.fullData);
// console.log(data);
		return (
			<div className="contain row">
				<div className="header">{HEADER}</div>
				<div className="page">
					<div className="headUl col-sm-12"><h2>Detail info about {data.name}</h2></div>
					<img src={imgPath.path+'.'+imgPath.extension} alt={data.name}/>
					<ul>
						<li className="col-sm-12">
							<div className="leftBox">The hero`s name is =></div>
							<div className="rightBox">{data.name}</div>
						</li>
						<Description data={data} />
						<li className="col-sm-12">
							<div className="leftBox">The hero`s id is =></div>
							<div className="rightBox">{data.id}</div>
						</li>
						<li className="col-sm-12">
							<div className="leftBox">The hero modified in =></div>
							<div className="rightBox">{data.modified}</div>
						</li>
						<li className="col-sm-12">
							<div className="leftBox">U can visit =></div>
							<div className="rightBox">
								<a href={data.resourceURI}
									target="_blank"
									rel="noopener noreferrer">
									Original resource at Marvel
								</a>
							</div>
						</li>
						<Hamburger data={data} />

					</ul>

					

					<Link to="/" className="dropdown"><DropUp name="Go Back" /></Link>
				</div>
				<div className="col-sm-8">
					<div className="headBlockItem"><h1>Other found heroes</h1></div>
					<div className="blockItem">
					{this.props.data.results.map((item, index) =>
						<Block key={index} data={item} />
					)}
					</div>
				</div>
				<div className="footer">{FOOTER}</div>
			</div>
		);
		
	}
}

export default connect(
	state => ({
		data: state.dataStore 
	}),
	null
)(Page);
