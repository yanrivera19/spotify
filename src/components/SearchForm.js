import React from 'react';
import {Form, Field} from 'react-final-form';

const SearchForm = (props) => { 
  	const renderInput = ({ input}) => {    	
    	let autofocus = true;    	
    
		return (			
  			<div className="field term-form" style={{paddingBottom: '10px'}}>
      			<div className="ui left icon input term-input" >
      				<i className="search icon"></i>
        			<input {...input} id="termInput" autoFocus={autofocus} className="term-input" placeholder="Search for songs, artists, or albums" autoComplete="off" style={{fontSize: '17px'}}/>
        		</div>
  			</div>
		);
  	};
 
  	const onSubmit = (formValues, form) => {
  		if (formValues === '') {
  			return false;
  		} else {
	    	props.onSubmit(formValues.term);
	    	form.reset();

	    	let term;

	    	if (localStorage.getItem("term") === null) {
	    		term = [];
	    	} else {
	    		term = JSON.parse(localStorage.getItem("term"));
	    	}

	    	term.splice(0, 1, formValues.term);
	    	localStorage.setItem("term", JSON.stringify(term));
	    }
  	};
 
  	return (
    	<Form
	    	onSubmit={onSubmit}
      		render={({ handleSubmit }) => (
        		<form onSubmit={handleSubmit} spellCheck="false" className="ui form error">     			
          			<Field name="term" component={renderInput}/> 
        		</form>
      		)}
    	/>
  	);
};

export default SearchForm;