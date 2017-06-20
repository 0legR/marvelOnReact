import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {HEADER, FOOTER, DROPUP} from './head_foot/index';
import Search from './fetch/index.js';

export default class Home extends Component {

	render() {
		return (
			<div>
				<div className="main">
					<div className="header">{HEADER}</div>
					<div className="container" id="container">
						<div className="search" id="search"><Search /></div>
						<div className="dropdown">{DROPUP}</div>
					</div>
					<div className="footer">{FOOTER}</div>
				</div>
			</div>
		);
	}
}