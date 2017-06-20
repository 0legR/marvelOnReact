import React from 'react';
// import ReactDom from 'react-dom';
import {HEADER, FOOTER} from '../head_foot/index';
import { Link } from 'react-router-dom';
import './index.css';

export default class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.location.state.data
		};
	}

	moveBodyImg() {
		let body = document.body;
		body.style.backgroundImage = 'none';
	}

	addBodyImg() {
		let body = document.body;
		body.style.backgroundImage = "url(./img/m_back.jpg)";
		// console.log(body.style.backgroundImage);
	}

	render() {
		let imgPath = this.state.data.thumbnail;
		let data = this.state.data;

		return (
			<div>
				<div className="header">{HEADER}</div>
				<div className="page">
					<img src={imgPath.path+'.'+imgPath.extension} alt={data.name}/>
					<h2><span>The hero`s name is </span>{data.name}</h2>
					<h3><span>The hero`s id is </span>{data.id}</h3>
					<h4><span>The hero modified in </span>{data.modified}</h4>
					<p><span>Description => </span>{data.description}</p>
					<h4><span>Modified =></span> {data.modified}</h4>
					<a href={data.resourceURI}>U can visit "Original resource"</a>

					<Link to="/" onClick={this.addBodyImg()} >Back to Main</Link>
				</div>
				<div className="footer">{FOOTER}</div>
			</div>
		);
		
	}
}

// return (
// 			<div className="main row">
// 				<div className="header" onLoad={this.moveBodyImg()}>{HEADER}</div>
// 				<div className="page">
// 					<img src="https://i.annihil.us/u/prod/marvel/i/mg/7/10/537bc71e9286f.jpg" alt="img" />
					// <Link to="/" onClick={this.addBodyImg()} >Back to Main</Link>
// 					<h3>Tor here is</h3>
// 				</div>
// 				<div className="footer">{FOOTER}</div>
// 			</div>
// 		);
		