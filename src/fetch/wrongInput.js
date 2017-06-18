import React from 'react';
import ReactDOM from 'react-dom';
import ModalDialog from 'react-bootstrap/lib/ModalDialog';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import Button from 'react-bootstrap/lib/Button';
import './index.css';





class WrongInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		ReactDOM.findDOMNode(this.refs.try).onClick(window.location.href="/");
	}

	render() {
		return (
			<div className="static-modal">
			    <ModalDialog>
			    	<ModalHeader>
			    		<ModalTitle className="title">{this.props.title}</ModalTitle>
			    	</ModalHeader>

			    	<ModalBody>
			    		{this.props.body}
			    	</ModalBody>

			    	<ModalFooter>
			    		{/*<Button>Close</Button>*/}
			    		<Button bsStyle="primary" onClick={this.handleClick} ref="try">Next try</Button>
			    	</ModalFooter>

			    </ModalDialog>
			</div>
		);
	}
}

export default WrongInput;