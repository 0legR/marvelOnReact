import React from 'react';
import ReactDom from 'react-dom';
import {HEADER, FOOTER} from './head_foot/index';

class Page extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="header">{HEADER}</div>
				<div className="page">
					<img src={imgPath.path+'.'+imgPath.extension} alt={this.props.data.name}/>
					<a href="#container">{this.props.data.name}</a>
					<h3>{this.props.data.id}</h3>
					<h4>{this.props.data.modified}</h4>
				</div>
				<div className="footer">{FOOTER}</div>
			</div>
		);
	}
}

ReactDom.render(
	<Page />,
	document.getElementById('root')
);