import React from 'react';
import But from '../button/index';

class GetRequest extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {

	// 	};
	// }

	handleClick() {
		fetch('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&limit=1&apikey=89129af654601343357294496c526cfd').then(r => r.json()).then(r => console.log(r));
	}

	render() {
		return (
			<form>
				<label>Input name of personage
					<input
						type="text"
						defaultValue=""
						ref="getRequest"
					/>
				</label>
				<div className="button" onClick={this.handleClick}>
					<But bsSize="small" bsStyle="info" name="submit" />
				</div>
			</form>
		);
	}
}

export default GetRequest;