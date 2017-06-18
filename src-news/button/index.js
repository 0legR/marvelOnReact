import Button from 'react-bootstrap/lib/Button';
import React from 'react';

class ButtonReadMore extends React.Component {

	render() {
		return (
			<Button bsStyle={this.props.bsStyle}
					bsSize={this.props.bsSize}
					disabled={this.props.disabled} >
						{this.props.name}
			</Button>);
	}
}

export default ButtonReadMore;