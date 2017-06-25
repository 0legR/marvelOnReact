import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import HamburgerItem from './hamburgerItem';


export default class Hamburger extends Component {
	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let hamburger = document.getElementsByClassName('hamburger');

		for (var i = 0; i < hamburger.length; i++) {
			hamburger[i].onclick = function() {
				this.classList.toggle('active');
				let dropDown = this.nextElementSibling;

				if (dropDown.style.maxHeight) {
					dropDown.style.maxHeight = null
				}else{
					dropDown.style.maxHeight = dropDown.scrollHeight+'px';
				};
			}
		};
	}
	
	render() {
		let data = this.props.data;
		return (
			<li className="col-sm-12">
				<div className="leftBox">{data.name}`s comics =></div>
				<div className="rightBox">
					<button onClick={this.handleClick} className="hamburger" ref="hamburger">
							<FontAwesome name="bars"
								className="bars"
								size="2x"
								style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
							/>
					</button>
					<ul className="dropDown" ref="dropDown">
						<li>
							<div className="leftBox">Available comics =></div>
							<div className="rightBox">{data.comics.available}</div>
						</li>
						<hr />
						<li>
							<div className="leftBox">Comics Collection =></div>
							<div className="rightBox">
								<a href={data.collectionURI}
									target="_blank"
									rel="noopener noreferrer">
									Original resource at Marvel
								</a>
							</div>
						</li>
						<hr />
						<li>
							<div className="leftBox">Items comics =></div>
							<div className="rightBox">
								<button onClick={this.handleClick} className="hamburger" ref="hamburger">
									<FontAwesome name="bars"
										className="bars"
										size="2x"
										style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
									/>
								</button>
								<ul className="dropDown" ref="dropDown">
									<div className="overflowUl">
										{data.comics.items.map((item, key) => {
											return <HamburgerItem key={key} data={item} />
										})}
									</div>
								</ul>
							</div>
						</li>
						<hr />
						<li>
							<div className="leftBox">Comics returned =></div>
							<div className="rightBox">{data.comics.returned}</div>
						</li>
					</ul>
				</div>
			</li>
		);
	}
}
