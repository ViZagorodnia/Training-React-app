import React from 'react';
import PropTypes from 'prop-types';
import GuesInputForm from './GuesInputForm';

const Header = props =>
	<header>
		<h1>Check list</h1>
	  <p>Trainig app</p>
    <GuesInputForm 
		  newGuestSubmitHandler ={props.newGuestSubmitHandler}
			pendingGuest={props.pendingGuest}
			handleNameInput ={props.handleNameInput}
		/>
	</header>
 ;
Header.propTypes = {
	newGuestSubmitHandler: PropTypes.func.isRequired,	
	pendingGuest: PropTypes.string.isRequired,
	handleNameInput: PropTypes.func.isRequired,
};
export default Header;