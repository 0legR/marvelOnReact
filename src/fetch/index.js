import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Block from '../block';
import WrongInput from './wrongInput';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			limit: 0,
			offset: 0,
			results: [],
			total: 0,
			inputValue: '',
			searchIsEmpty: true
		};
		this.handleClick = this.handleClick.bind(this);
		this.handlerCheck = this.handlerCheck.bind(this);
		this.handleClickKeypress = this.handleClickKeypress.bind(this);
		
	}

	handleClick() {
			let self = this;
			let key = '89129af654601343357294496c526cfd';
			let url = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=';

			if (!this.state.searchIsEmpty) {
				fetch(url+this.state.inputValue+'&limit=3&apikey='+key)
					.then(r => r.json())
					.then(r => (self.setState({...r.data})))
					.then(function() {
							if (self.state.count !== 0) {
								ReactDOM.findDOMNode(self.refs.blocks).scrollIntoView(false);

							}else{
								return ReactDOM.render(
									<WrongInput
										title="Something Wrong"
										body={"Incidentally, U`ve inputed the name of Marvel`s Hero with mistake.\nPlease keep trying!"}
									/>,
									document.getElementById('container')
								);
							}
						}
					);
			}else{
				return ReactDOM.render(
					<WrongInput
						title="Input Search is empty!"
						body="Incidentally, U've forgotten input the name of Marvel`s Hero"
					/>,
					document.getElementById('container')
				);
			}
	}

	handlerCheck(stateItem, e) {
		let item = ReactDOM.findDOMNode(this.refs.heroName).value;
		if (item.trim().length > 0) {
			this.setState({
				searchIsEmpty: false,
				inputValue: item
			});
		}else{
			this.setState({
				searchIsEmpty: true,
			});
		};
	}

	handleClickKeypress(event) {
		// console.log(event.keyCode);
		if (event.keyCode === 13) {
				this.handleClick();
		};
	}

	componentDidMount(){
		ReactDOM.findDOMNode(this.refs.heroName).focus();
	}

	render() {

		return (
			<div>
			<FormGroup>
		    	<InputGroup>
			        <InputGroup.Addon>Input Marvel`s Hero {this.state.total}</InputGroup.Addon>
			        <FormControl
			        	type="text"
			        	onChange={this.handlerCheck.bind(this, 'searchIsEmpty')}
			        	onKeyDown={this.handleClickKeypress} 
			        	defaultValue=""
			        	ref="heroName"
			        	id="heroName" />
			        <InputGroup.Addon onClick={this.handleClick}>Start</InputGroup.Addon>
		    	</InputGroup>
		    </FormGroup>
		    <ul className="result col-xs-12" ref="blocks">
				{this.state.results.map((item, key) => {
					return <Block key={key} data={item}/>
					})
				}
			</ul>
		    </div>
		);
	}
}

export default Search;