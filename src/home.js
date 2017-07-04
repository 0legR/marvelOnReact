import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import DropUp, {HEADER, FOOTER} from './head_foot/index';
import Search from './fetch/index.js';

class Home extends Component {

	componentDidUpdate = () => { ReactDOM.findDOMNode(this).scrollIntoView(); }

	render() {
		return (
			<div className="body row">
				<div className="main col-sm-12">
					<div className="header">{HEADER}</div>
					<div className="container" id="container">
						<div className="search" id="search"><Search /></div>
						<div className="dropdown"><DropUp name="more..." /></div>
					</div>
					<div className="footer">{FOOTER}</div>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		data: state.dataStore
	}),
	null
)(Home);