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
						<li className="col-sm-12">
							<div className="leftBox">Description =></div>
							<div className="rightBox">{data.description}</div>
						</li>
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
								<a href={data.resourceURI} target="_blank">Original resource on Marvel</a>
							</div>
						</li>
						<li className="col-sm-12">
							<div className="leftBox">{data.name}`s comics =></div>
							<div className="rightBox">
								<ul>
									<li>
										<div className="leftBox">Available comics =></div>
										<div className="rightBox">{data.comics.available}</div>
									</li>
									<hr />
									<li>
										<div className="leftBox">Comics Collection =></div>
										<div className="rightBox">
											<a href={data.collectionURI}>Original resource on Marvel</a>
										</div>
									</li>
									<hr />
									<li>
										<div className="leftBox">Items comics =></div>
										<div className="rightBox">{data.comics.items.map((item, key) => {
											return <li key={key}>{item}</li>
										})}</div>
									</li>
									<hr />
									<li>
										<div className="leftBox">Comics returned =></div>
										<div className="rightBox">{data.comics.returned}</div>
									</li>
								</ul>
							</div>
						</li>
					</ul>

					

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
		