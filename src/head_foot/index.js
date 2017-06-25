import React from 'react';
import './index.css';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';
// import Buttons from 'react-bootstrap/lib/Button';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';


export const HEADER = (
	<PageHeader>Marvel`s heroes & comics <small>keep finding on your favorite hero</small></PageHeader>
);

export const FOOTER = (
	<Panel footer="">Data provided by Marvel. © 2014 Marvel</Panel>
);

export const buttonsInstance = (
  <ButtonToolbar>
      <DropdownButton bsSize="large" title="Large button" id="dropdown-size-large">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
    </ButtonToolbar>
);

export default class DropUP extends React.Component {
  render() {
    return (
      <button className="dropup">{this.props.name}</button>
    );
  }
}